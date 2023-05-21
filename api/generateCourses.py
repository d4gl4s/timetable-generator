from urllib.request import urlopen
import json
import os
import sys

firstPart = "https://ois2.ut.ee/api/timetable/courses/"
with open(os.path.join(sys.path[0], "links1.txt"), "r") as f:
    read = f.read().splitlines()

ained = {"courses":[]}
for rida in read:
    if len(rida) < 35:
        continue
    url = firstPart+rida
    print(url)
    try:
        response = urlopen(url)
    except:
        continue
    data_json = json.loads(response.read())
    if not 'info' in data_json:
        continue
    if not 'events' in data_json:
        continue
    ainekood = data_json['info']['course_code']
    if 'en' in data_json['info']['title']:
        nimi = data_json['info']['title']['en']
    else:
        nimi = data_json['info']['title']['et']
    eap = 0
    if 'credits' in data_json['info']:
        eap = data_json['info']['credits']
    aine = {"name":nimi, "code":ainekood, "eap":eap,"lecture":[], "groups":[]}

    groups = {}
    lecturers = {}
    if 'groups' in data_json:
        for group in data_json['groups']:
            groups[group] = data_json['groups'][group]
    if 'lecturers' in data_json:
        for lecturer in data_json['lecturers']:
            lecturers[lecturer["person_uuid"]] = lecturer["person_name"]
    
    for event in data_json['events']:
        note = ""
        if ("-" in event['time']['academic_weeks'] or event['time']['academic_weeks'].count(",")>3) and event['event_type']['code'] == "lecture" and (event['study_work_type']["code"]=="practice" or event['study_work_type']["code"]=="lecture" or event['study_work_type']["code"]=="seminar"):
            asukoht = None
            tyyp = event['study_work_type']["code"]
            nadalapaev = int(event['time']['weekday']["code"])-1
            algusaeg = event['time']['begin_time']
            loppaeg = event['time']['end_time']


            algusLahku = algusaeg.split(":")
            loppLahku = loppaeg.split(":")
            algus = int(algusLahku[0])
            lopp = int(loppLahku[0])
            kordaja = 1
            if(lopp-algus>2):
                kordaja = int((lopp-algus)/2)
                for i in range(kordaja):
                    if(i!=0):
                        algusaeg = str(algus)+":00:00"
                    loppaeg = str(algus+2)+":00:00"
                    algus += 2
                    if 'address' in event['location']:
                        asukoht = event['location']['address']
                    tund = {"weekday":nadalapaev, "startTime":algusaeg,"endTime":loppaeg,"place":asukoht}
                    if tyyp=="lecture":
                        aine["lecture"].append(tund)
                    else:
                        
                        for n in event['notes']:
                            note = event['notes'][n]
                        grupp = None
                        lecturer = None
                        if 'group_uuids' in event:
                            for n in event['group_uuids']:
                                grupp = groups[n]
                        if 'lecturers' in event:
                            lecturer = lecturers[event['lecturers'][0]['person_uuid']]

                        leidub = False
                        tund["type"] = tyyp
                        for group in aine['groups']:
                            if group['group'] == grupp:
                                group["practicalSessions"].append(tund)
                                leidub = True
                        if(not leidub):
                            aine['groups'].append({"group":grupp, "lecturer":lecturer, "practicalSessions":[tund]})
            else:
                if 'address' in event['location']:
                    asukoht = event['location']['address']
                
                tund = {"weekday":nadalapaev, "startTime":algusaeg,"endTime":loppaeg,"place":asukoht}
                if tyyp=="lecture":
                    aine["lecture"].append(tund)
                else:
                    
                    for n in event['notes']:
                        note = event['notes'][n]
                    grupp = None
                    lecturer = None
                    if 'group_uuids' in event:
                        for n in event['group_uuids']:
                            grupp = groups[n]
                    if 'lecturers' in event:
                        lecturer = lecturers[event['lecturers'][0]['person_uuid']]

                    leidub = False
                    tund["type"] = tyyp
                    for group in aine['groups']:
                        if group['group'] == grupp:
                            group["practicalSessions"].append(tund)
                            leidub = True
                    if(not leidub):
                        aine['groups'].append({"group":grupp, "lecturer":lecturer, "practicalSessions":[tund]})
    ained['courses'].append(aine)

with open(os.path.join(sys.path[0], "data.json"), "w", encoding='utf-8') as outfile:
    json.dump(ained, outfile) 