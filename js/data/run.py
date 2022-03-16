import csv, json
import os

source_dir = "./src"
target_dir = "./target"

file_names = os.listdir(source_dir)

for file_name in file_names:
    rows = []
    with open(source_dir+"/"+file_name) as csv_file:
        csvReader = csv.DictReader(csv_file)
        for row in csvReader:
            rows.append(row)

    json_file_name = file_name.split(" ")[-1].replace(".csv", ".json")

    with open(target_dir+"/"+json_file_name,"w") as json_file:
        json_file.write(json.dumps(rows))
