from urllib.request import urlopen
import json
import os
import sys

def addSession(event, groupNames, startTime, endTime, course):
    weekday = int(event['time']['weekday']["code"])-1
    if weekday < 5:
        location = None
        if 'address' in event['location']:
            location = event['location']['address']
        session = {"weekday":weekday, "startTime":startTime,"endTime":endTime,"place":location}
        if type=="lecture" or type=="loeng":
            course["lecture"].append(session)
        else:
            lecturer = None
            groupExists = False
            sessionGroup = []
            if 'group_uuids' in event:
                for n in event['group_uuids']:
                    sessionGroup.append(groupNames[n])
                    groupExists = True
            if not groupExists:
                sessionGroup.append(None)

            if 'lecturers' in event:
                lecturer = lecturers[event['lecturers'][0]['person_uuid']]

            session["type"] = type

            for g in sessionGroup:
                found = False
                for group in course['groups']:
                    if group['group'] == g:
                        group["practicalSessions"].append(session)
                        found = True
                if(not found):
                    course['groups'].append({"group":g, "lecturer":lecturer, "practicalSessions":[session]})
        


firstPart = "https://ois2.ut.ee/api/timetable/courses/"
with open(os.path.join(sys.path[0], "linksA.txt"), "r") as f:
    lines = f.read().splitlines()

courses = {"courses":[]}
for line in lines:
    if len(line) < 35:
        continue
    url = firstPart+line
    try:
        response = urlopen(url)
    except:
        continue
    data_json = json.loads(response.read())
    if not 'info' in data_json:
        continue
    if not 'events' in data_json:
        continue
    courseCode = data_json['info']['course_code']
    if 'et' in data_json['info']['title']:
        courseName = data_json['info']['title']['et']
    else:
        courseName = data_json['info']['title']['en']
    eap = 0
    if 'credits' in data_json['info']:
        eap = data_json['info']['credits']
    course = {"name":courseName, "code":courseCode, "eap":eap,"lecture":[], "groups":[]}
    groupNames = {}
    lecturers = {}
    if 'groups' in data_json:
        for group in data_json['groups']:
            groupNames[group] = data_json['groups'][group]
    if 'lecturers' in data_json:
        for lecturer in data_json['lecturers']:
            lecturers[lecturer["person_uuid"]] = lecturer["person_name"]
    
    for event in data_json['events']:
        if ("-" in event['time']['academic_weeks'] or event['time']['academic_weeks'].count(",")>3) and event['event_type']['code'] == "lecture" and (event['study_work_type']["code"]=="practice" or event['study_work_type']["code"]=="lecture" or event['study_work_type']["code"]=="seminar"):

            if 'et' in event['study_work_type']:
                type = event['study_work_type']["et"]
            else:
                type = event['study_work_type']["en"]
            startTime = event['time']['begin_time']
            endTime = event['time']['end_time']


            beginningApart = startTime.split(":")
            endApart = endTime.split(":")
            beginning = int(beginningApart[0])
            end = int(endApart[0])
            multiplier = 1
            if(end-beginning>2):
                multiplier = int((end-beginning)/2)
                for i in range(multiplier):
                    if(i!=0):
                        startTime = str(beginning)+":00:00"
                    endTime = str(beginning+2)+":00:00"
                    beginning += 2
                    addSession(event, groupNames, startTime, endTime, course)
            else:
                addSession(event, groupNames, startTime, endTime, course)

    newCourse = {'name':course['name'], 'code':course['code'], 'eap':course['eap'], 'lecture':course['lecture'], 'groups':[]}

    groupsWithSameTimes = [] 
    for session in course['groups']:
        timeSet = set()
        for one in session['practicalSessions']:            
            timeSet.add(one['weekday'])
            timeSet.add(one['startTime'])
            timeSet.add(one['endTime'])
        alreadyBeen = False
        for k in range(len(groupsWithSameTimes)):
            if groupsWithSameTimes[k] == timeSet:
                alreadyBeen = True
                newCourse['groups'][k]['group'].append(session['group'])
                newCourse['groups'][k]['lecturer'].append(session['lecturer'])
                sessions = newCourse['groups'][k]['practicalSessions']
                for ax in range(len(sessions)):
                    for b in range(len(session['practicalSessions'])):
                        if sessions[ax]['weekday'] == session['practicalSessions'][b]['weekday'] and sessions[ax]['startTime'] == session['practicalSessions'][b]['startTime'] and sessions[ax]['endTime'] == session['practicalSessions'][b]['endTime']:
                            sessions[ax]['place'].append(session['practicalSessions'][b]['place'])
                break
        if not alreadyBeen:
            groupsWithSameTimes.append(timeSet)
            newSession = {'group':[session['group']], 'lecturer':[session['lecturer']], 'practicalSessions':[]}  
            for s in session['practicalSessions']:
                newSession['practicalSessions'].append({'weekday':s['weekday'], 'startTime':s['startTime'], 'endTime':s['endTime'], 'place':[s['place']], 'type':s['type']})
            newCourse['groups'].append(newSession)

    added = False
    for allCourses in range(len(courses['courses'])):
        if newCourse['code'] < courses['courses'][allCourses]['code']:
            courses['courses'].insert(allCourses, newCourse)
            added = True
            break
    if not added:
        courses['courses'].append(newCourse)

with open(os.path.join(sys.path[0], "dataEst.json"), "w", encoding='utf-8') as outfile:
    json.dump(courses, outfile)
 