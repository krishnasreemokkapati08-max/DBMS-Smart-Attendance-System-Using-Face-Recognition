SMARTATTENDDB - MongoDB DATA PACKAGE
====================================

Database name:
SmartAttendDB

Collections (10):
1. admins - 5 documents
2. students - 15 documents
3. courses - 5 documents
4. classrooms - 5 documents
5. class_sessions - 10 documents
6. attendance - 15 documents
7. face_profiles - 15 documents
8. verification_audits - 8 documents
9. fee_records - 15 documents
10. notifications - 6 documents

OPTION 1 - MongoDB Compass
--------------------------
The collections folder contains JSON files.
For each collection:
1. Open MongoDB Compass.
2. Connect to your MongoDB server.
3. Create/open database: SmartAttendDB.
4. Create the collection with the matching name.
5. Click Add Data -> Import JSON or CSV.
6. Select the matching .json file.
7. Import it.

The .json files are normal JSON arrays and are convenient for Compass.

OPTION 2 - MongoDB Shell
------------------------
If mongosh is installed, run:

mongosh "mongodb://localhost:27017/SmartAttendDB" SmartAttendDB_seed.js

This recreates the database contents from the supplied seed script and creates the indexes.

OPTION 3 - mongoimport
----------------------
Use the .ndjson files if you want command-line imports.
Example:

mongoimport --db SmartAttendDB --collection students --file collections/students.ndjson --jsonArray=false

Repeat for each collection.

IMPORTANT
---------
The package is generated directly from the supplied SmartAttendDB script.
It contains the same sample faculty, student, course, classroom, session,
attendance, face-profile, audit, fee, and notification data defined there.

The package does not contain actual biometric face images/embeddings; the
face_profiles collection contains only the fields present in the supplied script.
