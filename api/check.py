import json
import os
import sys

def read_json():
    try:
        with open("api\dataEst.json", 'r') as file:
            data = json.load(file)

        return data

    except json.JSONDecodeError as err:
        print("Error reading JSON file:", err)
    except Exception as e:
        print(f"An error occurred: {e}")



data = read_json()
x = data["coursesEST"]
for d in range(len(x)):
    roguep = []
    row = x[d]
    try:
        assert len(row.keys())==5
        assert isinstance(row["name"], str)
        assert isinstance(row["code"], str)
        assert isinstance(row["eap"], (int,float))
        
        
        for l in row["lecture"]:
            assert isinstance(l["startTime"], str)
            assert isinstance(l["endTime"], str)
            assert isinstance(l["place"], (str)) or l["place"] is None
        
        assert isinstance(row["groups"], list)
        assert isinstance(row["lecture"], list)
        assert row["groups"] is not None
        for c in row["groups"]:
            assert len(c.keys())==3
            assert isinstance(c["group"], list)
            assert c["group"] is not None
            for g in c["group"]:
                assert isinstance(g, str) or g is None
            for g in c["lecturer"]:
                assert isinstance(g, str) or g is None
            assert isinstance(c["lecturer"], list)
            assert isinstance(c["practicalSessions"], list)
            for p in c["practicalSessions"]:
                assert len(p.keys()) == 5
                assert isinstance(p["startTime"], str)
                assert isinstance(p["endTime"], str)
                assert isinstance(p["weekday"], int)
                assert 0 <= p["weekday"] <= 6
                assert isinstance(p["type"], str)
                assert len(p["place"]) >= 1
                assert isinstance(p["place"], list)
        """
            try:
                assert isinstance(l["weekday"], int)
            except:
                roguep.append(l)
        for r in roguep:
            row["lecture"].remove(r)
            row["groups"] = roguep
            #assert 0 <= l["weekday"] <= 6
        """
    except:
        print(row["code"])
        
#with open(os.path.join(sys.path[0], "data.json"), "w", encoding='utf-8') as outfile:
#    json.dump(data, outfile)
       