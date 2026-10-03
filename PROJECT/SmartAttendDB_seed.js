// ============================================================
// SMARTATTEND - MULTI-FACTOR ATTENDANCE SYSTEM
// COMPLETE FRESH DATABASE
// Database: SmartAttendDB
// 10 MAIN DOMAINS
// ============================================================

use("SmartAttendDB");


// ============================================================
// 1. ADMINS / FACULTY
// 5 FACULTY
// ============================================================

db.admins.insertMany([

    {
        facultyId: "FAC001",
        employeeId: "KLH-F001",
        name: "Dr. Priya Sharma",
        email: "priya.sharma@klh.edu",
        phone: "+91-9000000001",
        department: "AI & Data Science",
        designation: "Assistant Professor",
        role: "faculty",
        username: "priya.sharma",
        password: "Faculty@123",
        subjects: [
            "Data Structures",
            "Database Systems"
        ],
        classrooms: [
            "LH-204",
            "LAB-3"
        ],
        status: "active"
    },

    {
        facultyId: "FAC002",
        employeeId: "KLH-F002",
        name: "Dr. Rahul Verma",
        email: "rahul.verma@klh.edu",
        phone: "+91-9000000002",
        department: "Computer Science",
        designation: "Associate Professor",
        role: "faculty",
        username: "rahul.verma",
        password: "Faculty@123",
        subjects: [
            "Operating Systems"
        ],
        classrooms: [
            "LH-205"
        ],
        status: "active"
    },

    {
        facultyId: "FAC003",
        employeeId: "KLH-F003",
        name: "Dr. Anjali Reddy",
        email: "anjali.reddy@klh.edu",
        phone: "+91-9000000003",
        department: "AI & Data Science",
        designation: "Assistant Professor",
        role: "faculty",
        username: "anjali.reddy",
        password: "Faculty@123",
        subjects: [
            "Machine Learning"
        ],
        classrooms: [
            "AI-LAB"
        ],
        status: "active"
    },

    {
        facultyId: "FAC004",
        employeeId: "KLH-F004",
        name: "Dr. Kiran Kumar",
        email: "kiran.kumar@klh.edu",
        phone: "+91-9000000004",
        department: "Information Technology",
        designation: "Professor",
        role: "faculty",
        username: "kiran.kumar",
        password: "Faculty@123",
        subjects: [
            "Web Technologies"
        ],
        classrooms: [
            "WEB-LAB"
        ],
        status: "active"
    },

    {
        facultyId: "FAC005",
        employeeId: "KLH-F005",
        name: "Dr. Sneha Rao",
        email: "sneha.rao@klh.edu",
        phone: "+91-9000000005",
        department: "Electronics",
        designation: "Assistant Professor",
        role: "faculty",
        username: "sneha.rao",
        password: "Faculty@123",
        subjects: [
            "Internet of Things"
        ],
        classrooms: [
            "IOT-LAB"
        ],
        status: "active"
    }

]);


// ============================================================
// 2. STUDENTS
// 15 STUDENTS
// ============================================================

db.students.insertMany([

    {
        studentId: "STU001",
        rollNumber: "101",
        name: "Aarav Kumar",
        email: "aarav.kumar@klh.edu",
        phone: "+91-9100000001",
        department: "AI & Data Science",
        year: 2,
        section: "A",
        semester: 3,
        cgpa: 8.7,
        username: "101",
        password: "Student@123",
        role: "student",
        status: "active"
    },

    {
        studentId: "STU002",
        rollNumber: "102",
        name: "Ananya Reddy",
        email: "ananya.reddy@klh.edu",
        phone: "+91-9100000002",
        department: "AI & Data Science",
        year: 2,
        section: "A",
        semester: 3,
        cgpa: 9.1,
        username: "102",
        password: "Student@123",
        role: "student",
        status: "active"
    },

    {
        studentId: "STU003",
        rollNumber: "103",
        name: "Arjun Rao",
        email: "arjun.rao@klh.edu",
        phone: "+91-9100000003",
        department: "AI & Data Science",
        year: 2,
        section: "A",
        semester: 3,
        cgpa: 8.4,
        username: "103",
        password: "Student@123",
        role: "student",
        status: "active"
    },

    {
        studentId: "STU004",
        rollNumber: "104",
        name: "Bhavya Singh",
        email: "bhavya.singh@klh.edu",
        phone: "+91-9100000004",
        department: "AI & Data Science",
        year: 2,
        section: "A",
        semester: 3,
        cgpa: 9.0,
        username: "104",
        password: "Student@123",
        role: "student",
        status: "active"
    },

    {
        studentId: "STU005",
        rollNumber: "105",
        name: "Charan Teja",
        email: "charan.teja@klh.edu",
        phone: "+91-9100000005",
        department: "AI & Data Science",
        year: 2,
        section: "A",
        semester: 3,
        cgpa: 8.2,
        username: "105",
        password: "Student@123",
        role: "student",
        status: "active"
    },

    {
        studentId: "STU006",
        rollNumber: "106",
        name: "Diya Sharma",
        email: "diya.sharma@klh.edu",
        phone: "+91-9100000006",
        department: "AI & Data Science",
        year: 2,
        section: "A",
        semester: 3,
        cgpa: 9.3,
        username: "106",
        password: "Student@123",
        role: "student",
        status: "active"
    },

    {
        studentId: "STU007",
        rollNumber: "107",
        name: "Ishaan Verma",
        email: "ishaan.verma@klh.edu",
        phone: "+91-9100000007",
        department: "AI & Data Science",
        year: 2,
        section: "A",
        semester: 3,
        cgpa: 8.6,
        username: "107",
        password: "Student@123",
        role: "student",
        status: "active"
    },

    {
        studentId: "STU008",
        rollNumber: "108",
        name: "Kavya Nair",
        email: "kavya.nair@klh.edu",
        phone: "+91-9100000008",
        department: "AI & Data Science",
        year: 2,
        section: "A",
        semester: 3,
        cgpa: 9.2,
        username: "108",
        password: "Student@123",
        role: "student",
        status: "active"
    },

    {
        studentId: "STU009",
        rollNumber: "109",
        name: "Manoj Patel",
        email: "manoj.patel@klh.edu",
        phone: "+91-9100000009",
        department: "AI & Data Science",
        year: 2,
        section: "A",
        semester: 3,
        cgpa: 8.8,
        username: "109",
        password: "Student@123",
        role: "student",
        status: "active"
    },

    {
        studentId: "STU010",
        rollNumber: "110",
        name: "Nisha Reddy",
        email: "nisha.reddy@klh.edu",
        phone: "+91-9100000010",
        department: "AI & Data Science",
        year: 2,
        section: "A",
        semester: 3,
        cgpa: 9.0,
        username: "110",
        password: "Student@123",
        role: "student",
        status: "active"
    },

    {
        studentId: "STU011",
        rollNumber: "111",
        name: "Rahul Singh",
        email: "rahul.singh@klh.edu",
        phone: "+91-9100000011",
        department: "AI & Data Science",
        year: 2,
        section: "A",
        semester: 3,
        cgpa: 8.5,
        username: "111",
        password: "Student@123",
        role: "student",
        status: "active"
    },

    {
        studentId: "STU012",
        rollNumber: "112",
        name: "Sneha Kapoor",
        email: "sneha.kapoor@klh.edu",
        phone: "+91-9100000012",
        department: "AI & Data Science",
        year: 2,
        section: "A",
        semester: 3,
        cgpa: 9.4,
        username: "112",
        password: "Student@123",
        role: "student",
        status: "active"
    },

    {
        studentId: "STU013",
        rollNumber: "113",
        name: "Vivek Reddy",
        email: "vivek.reddy@klh.edu",
        phone: "+91-9100000013",
        department: "AI & Data Science",
        year: 2,
        section: "A",
        semester: 3,
        cgpa: 8.3,
        username: "113",
        password: "Student@123",
        role: "student",
        status: "active"
    },

    {
        studentId: "STU014",
        rollNumber: "114",
        name: "Meera Joshi",
        email: "meera.joshi@klh.edu",
        phone: "+91-9100000014",
        department: "AI & Data Science",
        year: 2,
        section: "A",
        semester: 3,
        cgpa: 9.1,
        username: "114",
        password: "Student@123",
        role: "student",
        status: "active"
    },

    {
        studentId: "STU015",
        rollNumber: "115",
        name: "Aditya Rao",
        email: "aditya.rao@klh.edu",
        phone: "+91-9100000015",
        department: "AI & Data Science",
        year: 2,
        section: "A",
        semester: 3,
        cgpa: 8.9,
        username: "115",
        password: "Student@123",
        role: "student",
        status: "active"
    }

]);


// ============================================================
// 3. COURSES
// 5 COURSES
// ============================================================

db.courses.insertMany([

    {
        courseId: "DSA301",
        courseCode: "DSA301",
        courseName: "Data Structures",
        facultyId: "FAC001",
        facultyName: "Dr. Priya Sharma",
        department: "AI & Data Science",
        semester: 3,
        credits: 4,
        type: "Theory",
        totalClasses: 48,
        status: "active"
    },

    {
        courseId: "DBS302",
        courseCode: "DBS302",
        courseName: "Database Systems",
        facultyId: "FAC001",
        facultyName: "Dr. Priya Sharma",
        department: "AI & Data Science",
        semester: 3,
        credits: 4,
        type: "Theory",
        totalClasses: 46,
        status: "active"
    },

    {
        courseId: "OS303",
        courseCode: "OS303",
        courseName: "Operating Systems",
        facultyId: "FAC002",
        facultyName: "Dr. Rahul Verma",
        department: "AI & Data Science",
        semester: 3,
        credits: 4,
        type: "Theory",
        totalClasses: 44,
        status: "active"
    },

    {
        courseId: "ML304",
        courseCode: "ML304",
        courseName: "Machine Learning",
        facultyId: "FAC003",
        facultyName: "Dr. Anjali Reddy",
        department: "AI & Data Science",
        semester: 3,
        credits: 4,
        type: "Theory",
        totalClasses: 42,
        status: "active"
    },

    {
        courseId: "WT308",
        courseCode: "WT308",
        courseName: "Web Technologies",
        facultyId: "FAC004",
        facultyName: "Dr. Kiran Kumar",
        department: "Information Technology",
        semester: 3,
        credits: 3,
        type: "Lab",
        totalClasses: 40,
        status: "active"
    }

]);


// ============================================================
// 4. CLASSROOMS
// 5 CLASSROOMS
// ============================================================

db.classrooms.insertMany([

    {
        classroomId: "ROOM001",
        roomNumber: "LH-204",
        building: "Main Block",
        type: "Lecture Hall",
        capacity: 60,
        cameraEnabled: true,
        verificationCode: "LH204",
        locationStatus: "verified",
        status: "active"
    },

    {
        classroomId: "ROOM002",
        roomNumber: "LH-205",
        building: "Main Block",
        type: "Lecture Hall",
        capacity: 60,
        cameraEnabled: true,
        verificationCode: "LH205",
        locationStatus: "verified",
        status: "active"
    },

    {
        classroomId: "ROOM003",
        roomNumber: "LAB-3",
        building: "Technology Block",
        type: "Computer Laboratory",
        capacity: 40,
        cameraEnabled: true,
        verificationCode: "LAB3",
        locationStatus: "verified",
        status: "active"
    },

    {
        classroomId: "ROOM004",
        roomNumber: "AI-LAB",
        building: "AI Block",
        type: "AI Laboratory",
        capacity: 40,
        cameraEnabled: true,
        verificationCode: "AILAB",
        locationStatus: "verified",
        status: "active"
    },

    {
        classroomId: "ROOM005",
        roomNumber: "WEB-LAB",
        building: "Technology Block",
        type: "Web Laboratory",
        capacity: 40,
        cameraEnabled: true,
        verificationCode: "WEBLAB",
        locationStatus: "verified",
        status: "active"
    }

]);


// ============================================================
// 5. CLASS SESSIONS
// 10 TIME-LOCKED SESSIONS
// ============================================================

db.class_sessions.insertMany([

    {
        sessionId: "SESSION001",
        courseId: "DSA301",
        subject: "Data Structures",
        facultyId: "FAC001",
        classroomId: "ROOM001",
        classroom: "LH-204",
        date: "2026-10-02",
        startTime: "09:00",
        endTime: "10:00",
        timeLocked: true,
        classroomVerified: true,
        status: "completed",
        totalStudents: 15,
        presentStudents: 10,
        absentStudents: 5,
        attendancePercentage: 66.67
    },

    {
        sessionId: "SESSION002",
        courseId: "DBS302",
        subject: "Database Systems",
        facultyId: "FAC001",
        classroomId: "ROOM003",
        classroom: "LAB-3",
        date: "2026-10-02",
        startTime: "10:00",
        endTime: "11:00",
        timeLocked: true,
        classroomVerified: true,
        status: "completed",
        totalStudents: 15,
        presentStudents: 12,
        absentStudents: 3,
        attendancePercentage: 80
    },

    {
        sessionId: "SESSION003",
        courseId: "OS303",
        subject: "Operating Systems",
        facultyId: "FAC002",
        classroomId: "ROOM002",
        classroom: "LH-205",
        date: "2026-10-01",
        startTime: "09:00",
        endTime: "10:00",
        timeLocked: true,
        classroomVerified: true,
        status: "completed",
        totalStudents: 15,
        presentStudents: 11,
        absentStudents: 4,
        attendancePercentage: 73.33
    },

    {
        sessionId: "SESSION004",
        courseId: "ML304",
        subject: "Machine Learning",
        facultyId: "FAC003",
        classroomId: "ROOM004",
        classroom: "AI-LAB",
        date: "2026-10-01",
        startTime: "11:00",
        endTime: "12:00",
        timeLocked: true,
        classroomVerified: true,
        status: "completed",
        totalStudents: 15,
        presentStudents: 13,
        absentStudents: 2,
        attendancePercentage: 86.67
    },

    {
        sessionId: "SESSION005",
        courseId: "WT308",
        subject: "Web Technologies",
        facultyId: "FAC004",
        classroomId: "ROOM005",
        classroom: "WEB-LAB",
        date: "2026-09-30",
        startTime: "10:00",
        endTime: "11:00",
        timeLocked: true,
        classroomVerified: true,
        status: "completed",
        totalStudents: 15,
        presentStudents: 10,
        absentStudents: 5,
        attendancePercentage: 66.67
    },

    {
        sessionId: "SESSION006",
        courseId: "DSA301",
        subject: "Data Structures",
        facultyId: "FAC001",
        classroomId: "ROOM001",
        classroom: "LH-204",
        date: "2026-09-29",
        startTime: "09:00",
        endTime: "10:00",
        timeLocked: true,
        classroomVerified: true,
        status: "completed",
        totalStudents: 15,
        presentStudents: 12,
        absentStudents: 3,
        attendancePercentage: 80
    },

    {
        sessionId: "SESSION007",
        courseId: "DBS302",
        subject: "Database Systems",
        facultyId: "FAC001",
        classroomId: "ROOM003",
        classroom: "LAB-3",
        date: "2026-09-29",
        startTime: "14:00",
        endTime: "15:00",
        timeLocked: true,
        classroomVerified: true,
        status: "completed",
        totalStudents: 15,
        presentStudents: 13,
        absentStudents: 2,
        attendancePercentage: 86.67
    },

    {
        sessionId: "SESSION008",
        courseId: "OS303",
        subject: "Operating Systems",
        facultyId: "FAC002",
        classroomId: "ROOM002",
        classroom: "LH-205",
        date: "2026-09-28",
        startTime: "09:00",
        endTime: "10:00",
        timeLocked: true,
        classroomVerified: true,
        status: "completed",
        totalStudents: 15,
        presentStudents: 12,
        absentStudents: 3,
        attendancePercentage: 80
    },

    {
        sessionId: "SESSION009",
        courseId: "ML304",
        subject: "Machine Learning",
        facultyId: "FAC003",
        classroomId: "ROOM004",
        classroom: "AI-LAB",
        date: "2026-09-27",
        startTime: "13:00",
        endTime: "14:00",
        timeLocked: true,
        classroomVerified: true,
        status: "completed",
        totalStudents: 15,
        presentStudents: 14,
        absentStudents: 1,
        attendancePercentage: 93.33
    },

    {
        sessionId: "SESSION010",
        courseId: "WT308",
        subject: "Web Technologies",
        facultyId: "FAC004",
        classroomId: "ROOM005",
        classroom: "WEB-LAB",
        date: "2026-09-26",
        startTime: "11:00",
        endTime: "12:00",
        timeLocked: true,
        classroomVerified: true,
        status: "completed",
        totalStudents: 15,
        presentStudents: 11,
        absentStudents: 4,
        attendancePercentage: 73.33
    }

]);


// ============================================================
// 6. ATTENDANCE
// 15 ATTENDANCE RECORDS
// ============================================================

db.attendance.insertMany([

    {
        attendanceId: "ATT001",
        sessionId: "SESSION001",
        studentId: "STU001",
        rollNumber: "101",
        studentName: "Aarav Kumar",
        subject: "Data Structures",
        date: "2026-10-02",
        time: "09:08",
        status: "Present",
        verificationStatus: "Verified",
        faceDetected: true,
        faceCount: 1,
        faceMatched: true,
        livenessVerified: true,
        classroomVerified: true,
        proxyCheckPassed: true,
        timeLockValid: true
    },

    {
        attendanceId: "ATT002",
        sessionId: "SESSION001",
        studentId: "STU002",
        rollNumber: "102",
        studentName: "Ananya Reddy",
        subject: "Data Structures",
        date: "2026-10-02",
        time: "09:09",
        status: "Present",
        verificationStatus: "Verified",
        faceDetected: true,
        faceCount: 1,
        faceMatched: true,
        livenessVerified: true,
        classroomVerified: true,
        proxyCheckPassed: true,
        timeLockValid: true
    },

    {
        attendanceId: "ATT003",
        sessionId: "SESSION001",
        studentId: "STU003",
        rollNumber: "103",
        studentName: "Arjun Rao",
        subject: "Data Structures",
        date: "2026-10-02",
        time: "09:10",
        status: "Present",
        verificationStatus: "Verified",
        faceDetected: true,
        faceCount: 1,
        faceMatched: true,
        livenessVerified: true,
        classroomVerified: true,
        proxyCheckPassed: true,
        timeLockValid: true
    },

    {
        attendanceId: "ATT004",
        sessionId: "SESSION001",
        studentId: "STU004",
        rollNumber: "104",
        studentName: "Bhavya Singh",
        subject: "Data Structures",
        date: "2026-10-02",
        time: "09:11",
        status: "Present",
        verificationStatus: "Verified",
        faceDetected: true,
        faceCount: 1,
        faceMatched: true,
        livenessVerified: true,
        classroomVerified: true,
        proxyCheckPassed: true,
        timeLockValid: true
    },

    {
        attendanceId: "ATT005",
        sessionId: "SESSION001",
        studentId: "STU005",
        rollNumber: "105",
        studentName: "Charan Teja",
        subject: "Data Structures",
        date: "2026-10-02",
        time: "09:12",
        status: "Present",
        verificationStatus: "Verified",
        faceDetected: true,
        faceCount: 1,
        faceMatched: true,
        livenessVerified: true,
        classroomVerified: true,
        proxyCheckPassed: true,
        timeLockValid: true
    },

    {
        attendanceId: "ATT006",
        sessionId: "SESSION001",
        studentId: "STU006",
        rollNumber: "106",
        studentName: "Diya Sharma",
        subject: "Data Structures",
        date: "2026-10-02",
        time: "09:13",
        status: "Present",
        verificationStatus: "Verified",
        faceDetected: true,
        faceCount: 1,
        faceMatched: true,
        livenessVerified: true,
        classroomVerified: true,
        proxyCheckPassed: true,
        timeLockValid: true
    },

    {
        attendanceId: "ATT007",
        sessionId: "SESSION001",
        studentId: "STU007",
        rollNumber: "107",
        studentName: "Ishaan Verma",
        subject: "Data Structures",
        date: "2026-10-02",
        time: "09:14",
        status: "Present",
        verificationStatus: "Verified",
        faceDetected: true,
        faceCount: 1,
        faceMatched: true,
        livenessVerified: true,
        classroomVerified: true,
        proxyCheckPassed: true,
        timeLockValid: true
    },

    {
        attendanceId: "ATT008",
        sessionId: "SESSION001",
        studentId: "STU008",
        rollNumber: "108",
        studentName: "Kavya Nair",
        subject: "Data Structures",
        date: "2026-10-02",
        time: "09:15",
        status: "Present",
        verificationStatus: "Verified",
        faceDetected: true,
        faceCount: 1,
        faceMatched: true,
        livenessVerified: true,
        classroomVerified: true,
        proxyCheckPassed: true,
        timeLockValid: true
    },

    {
        attendanceId: "ATT009",
        sessionId: "SESSION001",
        studentId: "STU009",
        rollNumber: "109",
        studentName: "Manoj Patel",
        subject: "Data Structures",
        date: "2026-10-02",
        time: "09:16",
        status: "Present",
        verificationStatus: "Verified",
        faceDetected: true,
        faceCount: 1,
        faceMatched: true,
        livenessVerified: true,
        classroomVerified: true,
        proxyCheckPassed: true,
        timeLockValid: true
    },

    {
        attendanceId: "ATT010",
        sessionId: "SESSION001",
        studentId: "STU010",
        rollNumber: "110",
        studentName: "Nisha Reddy",
        subject: "Data Structures",
        date: "2026-10-02",
        time: "09:17",
        status: "Present",
        verificationStatus: "Verified",
        faceDetected: true,
        faceCount: 1,
        faceMatched: true,
        livenessVerified: true,
        classroomVerified: true,
        proxyCheckPassed: true,
        timeLockValid: true
    },

    {
        attendanceId: "ATT011",
        sessionId: "SESSION002",
        studentId: "STU011",
        rollNumber: "111",
        studentName: "Rahul Singh",
        subject: "Database Systems",
        date: "2026-10-02",
        time: "10:08",
        status: "Present",
        verificationStatus: "Verified",
        faceDetected: true,
        faceCount: 1,
        faceMatched: true,
        livenessVerified: true,
        classroomVerified: true,
        proxyCheckPassed: true,
        timeLockValid: true
    },

    {
        attendanceId: "ATT012",
        sessionId: "SESSION002",
        studentId: "STU012",
        rollNumber: "112",
        studentName: "Sneha Kapoor",
        subject: "Database Systems",
        date: "2026-10-02",
        time: "10:09",
        status: "Present",
        verificationStatus: "Verified",
        faceDetected: true,
        faceCount: 1,
        faceMatched: true,
        livenessVerified: true,
        classroomVerified: true,
        proxyCheckPassed: true,
        timeLockValid: true
    },

    {
        attendanceId: "ATT013",
        sessionId: "SESSION002",
        studentId: "STU013",
        rollNumber: "113",
        studentName: "Vivek Reddy",
        subject: "Database Systems",
        date: "2026-10-02",
        time: "10:10",
        status: "Present",
        verificationStatus: "Verified",
        faceDetected: true,
        faceCount: 1,
        faceMatched: true,
        livenessVerified: true,
        classroomVerified: true,
        proxyCheckPassed: true,
        timeLockValid: true
    },

    {
        attendanceId: "ATT014",
        sessionId: "SESSION002",
        studentId: "STU014",
        rollNumber: "114",
        studentName: "Meera Joshi",
        subject: "Database Systems",
        date: "2026-10-02",
        time: "10:11",
        status: "Present",
        verificationStatus: "Verified",
        faceDetected: true,
        faceCount: 1,
        faceMatched: true,
        livenessVerified: true,
        classroomVerified: true,
        proxyCheckPassed: true,
        timeLockValid: true
    },

    {
        attendanceId: "ATT015",
        sessionId: "SESSION002",
        studentId: "STU015",
        rollNumber: "115",
        studentName: "Aditya Rao",
        subject: "Database Systems",
        date: "2026-10-02",
        time: "10:12",
        status: "Present",
        verificationStatus: "Verified",
        faceDetected: true,
        faceCount: 1,
        faceMatched: true,
        livenessVerified: true,
        classroomVerified: true,
        proxyCheckPassed: true,
        timeLockValid: true
    }

]);


// ============================================================
// 7. FACE PROFILES
// 15 FACE RECORDS
// ============================================================

db.face_profiles.insertMany([

    {
        faceId: "FACE001",
        studentId: "STU001",
        rollNumber: "101",
        studentName: "Aarav Kumar",
        enrollmentStatus: "verified",
        faceRecognitionEnabled: true,
        livenessEnabled: true,
        registeredSamples: 5,
        matchThreshold: 0.85,
        encodingVersion: "v1"
    },

    {
        faceId: "FACE002",
        studentId: "STU002",
        rollNumber: "102",
        studentName: "Ananya Reddy",
        enrollmentStatus: "verified",
        faceRecognitionEnabled: true,
        livenessEnabled: true,
        registeredSamples: 5,
        matchThreshold: 0.85,
        encodingVersion: "v1"
    },

    {
        faceId: "FACE003",
        studentId: "STU003",
        rollNumber: "103",
        studentName: "Arjun Rao",
        enrollmentStatus: "verified",
        faceRecognitionEnabled: true,
        livenessEnabled: true,
        registeredSamples: 5,
        matchThreshold: 0.85,
        encodingVersion: "v1"
    },

    {
        faceId: "FACE004",
        studentId: "STU004",
        rollNumber: "104",
        studentName: "Bhavya Singh",
        enrollmentStatus: "verified",
        faceRecognitionEnabled: true,
        livenessEnabled: true,
        registeredSamples: 5,
        matchThreshold: 0.85,
        encodingVersion: "v1"
    },

    {
        faceId: "FACE005",
        studentId: "STU005",
        rollNumber: "105",
        studentName: "Charan Teja",
        enrollmentStatus: "verified",
        faceRecognitionEnabled: true,
        livenessEnabled: true,
        registeredSamples: 5,
        matchThreshold: 0.85,
        encodingVersion: "v1"
    },

    {
        faceId: "FACE006",
        studentId: "STU006",
        rollNumber: "106",
        studentName: "Diya Sharma",
        enrollmentStatus: "verified",
        faceRecognitionEnabled: true,
        livenessEnabled: true,
        registeredSamples: 5,
        matchThreshold: 0.85,
        encodingVersion: "v1"
    },

    {
        faceId: "FACE007",
        studentId: "STU007",
        rollNumber: "107",
        studentName: "Ishaan Verma",
        enrollmentStatus: "verified",
        faceRecognitionEnabled: true,
        livenessEnabled: true,
        registeredSamples: 5,
        matchThreshold: 0.85,
        encodingVersion: "v1"
    },

    {
        faceId: "FACE008",
        studentId: "STU008",
        rollNumber: "108",
        studentName: "Kavya Nair",
        enrollmentStatus: "verified",
        faceRecognitionEnabled: true,
        livenessEnabled: true,
        registeredSamples: 5,
        matchThreshold: 0.85,
        encodingVersion: "v1"
    },

    {
        faceId: "FACE009",
        studentId: "STU009",
        rollNumber: "109",
        studentName: "Manoj Patel",
        enrollmentStatus: "verified",
        faceRecognitionEnabled: true,
        livenessEnabled: true,
        registeredSamples: 5,
        matchThreshold: 0.85,
        encodingVersion: "v1"
    },

    {
        faceId: "FACE010",
        studentId: "STU010",
        rollNumber: "110",
        studentName: "Nisha Reddy",
        enrollmentStatus: "verified",
        faceRecognitionEnabled: true,
        livenessEnabled: true,
        registeredSamples: 5,
        matchThreshold: 0.85,
        encodingVersion: "v1"
    },

    {
        faceId: "FACE011",
        studentId: "STU011",
        rollNumber: "111",
        studentName: "Rahul Singh",
        enrollmentStatus: "verified",
        faceRecognitionEnabled: true,
        livenessEnabled: true,
        registeredSamples: 5,
        matchThreshold: 0.85,
        encodingVersion: "v1"
    },

    {
        faceId: "FACE012",
        studentId: "STU012",
        rollNumber: "112",
        studentName: "Sneha Kapoor",
        enrollmentStatus: "verified",
        faceRecognitionEnabled: true,
        livenessEnabled: true,
        registeredSamples: 5,
        matchThreshold: 0.85,
        encodingVersion: "v1"
    },

    {
        faceId: "FACE013",
        studentId: "STU013",
        rollNumber: "113",
        studentName: "Vivek Reddy",
        enrollmentStatus: "verified",
        faceRecognitionEnabled: true,
        livenessEnabled: true,
        registeredSamples: 5,
        matchThreshold: 0.85,
        encodingVersion: "v1"
    },

    {
        faceId: "FACE014",
        studentId: "STU014",
        rollNumber: "114",
        studentName: "Meera Joshi",
        enrollmentStatus: "verified",
        faceRecognitionEnabled: true,
        livenessEnabled: true,
        registeredSamples: 5,
        matchThreshold: 0.85,
        encodingVersion: "v1"
    },

    {
        faceId: "FACE015",
        studentId: "STU015",
        rollNumber: "115",
        studentName: "Aditya Rao",
        enrollmentStatus: "verified",
        faceRecognitionEnabled: true,
        livenessEnabled: true,
        registeredSamples: 5,
        matchThreshold: 0.85,
        encodingVersion: "v1"
    }

]);


// ============================================================
// 8. VERIFICATION AUDITS
// 8 SECURITY RECORDS
// ============================================================

db.verification_audits.insertMany([

    {
        auditId: "AUD001",
        sessionId: "SESSION001",
        facultyId: "FAC001",
        event: "Multiple people detected",
        faceCount: 2,
        verificationStage: "Single Face Check",
        result: "Blocked",
        reason: "More than one person detected in camera",
        timestamp: "2026-10-02 09:20:30"
    },

    {
        auditId: "AUD002",
        sessionId: "SESSION001",
        facultyId: "FAC001",
        event: "No face detected",
        faceCount: 0,
        verificationStage: "Face Detection",
        result: "Blocked",
        reason: "No face detected by camera",
        timestamp: "2026-10-02 09:25:12"
    },

    {
        auditId: "AUD003",
        sessionId: "SESSION002",
        facultyId: "FAC001",
        event: "Liveness verification failure",
        faceCount: 1,
        verificationStage: "Liveness Check",
        result: "Blocked",
        reason: "Live-person verification failed",
        timestamp: "2026-10-02 10:18:10"
    },

    {
        auditId: "AUD004",
        sessionId: "SESSION002",
        facultyId: "FAC001",
        event: "Face verification failure",
        faceCount: 1,
        verificationStage: "Face Verification",
        result: "Blocked",
        reason: "Face did not match registered profile",
        timestamp: "2026-10-02 10:22:00"
    },

    {
        auditId: "AUD005",
        sessionId: "SESSION003",
        facultyId: "FAC002",
        event: "Classroom verification failure",
        faceCount: 1,
        verificationStage: "Classroom Verification",
        result: "Blocked",
        reason: "Invalid classroom verification code",
        timestamp: "2026-10-01 09:15:20"
    },

    {
        auditId: "AUD006",
        sessionId: "SESSION004",
        facultyId: "FAC003",
        event: "Multiple people detected",
        faceCount: 3,
        verificationStage: "Single Face Check",
        result: "Blocked",
        reason: "Possible proxy attendance attempt",
        timestamp: "2026-10-01 11:25:45"
    },

    {
        auditId: "AUD007",
        sessionId: "SESSION005",
        facultyId: "FAC004",
        event: "Time lock failure",
        faceCount: 1,
        verificationStage: "Session Verification",
        result: "Blocked",
        reason: "Attendance attempted outside active class window",
        timestamp: "2026-09-30 11:05:00"
    },

    {
        auditId: "AUD008",
        sessionId: "SESSION006",
        facultyId: "FAC001",
        event: "Multiple people detected",
        faceCount: 2,
        verificationStage: "Single Face Check",
        result: "Blocked",
        reason: "Second person entered camera frame",
        timestamp: "2026-09-29 09:28:12"
    }

]);


// ============================================================
// 9. FEE RECORDS
// 15 STUDENT FEE RECORDS
// ============================================================

db.fee_records.insertMany([

    {
        studentId: "STU001",
        rollNumber: "101",
        studentName: "Aarav Kumar",
        academicYear: "2026-27",
        totalFee: 125000,
        paidAmount: 107000,
        pendingAmount: 18000,
        status: "Pending"
    },

    {
        studentId: "STU002",
        rollNumber: "102",
        studentName: "Ananya Reddy",
        academicYear: "2026-27",
        totalFee: 125000,
        paidAmount: 125000,
        pendingAmount: 0,
        status: "Paid"
    },

    {
        studentId: "STU003",
        rollNumber: "103",
        studentName: "Arjun Rao",
        academicYear: "2026-27",
        totalFee: 125000,
        paidAmount: 119000,
        pendingAmount: 6000,
        status: "Pending"
    },

    {
        studentId: "STU004",
        rollNumber: "104",
        studentName: "Bhavya Singh",
        academicYear: "2026-27",
        totalFee: 125000,
        paidAmount: 125000,
        pendingAmount: 0,
        status: "Paid"
    },

    {
        studentId: "STU005",
        rollNumber: "105",
        studentName: "Charan Teja",
        academicYear: "2026-27",
        totalFee: 125000,
        paidAmount: 125000,
        pendingAmount: 0,
        status: "Paid"
    },

    {
        studentId: "STU006",
        rollNumber: "106",
        studentName: "Diya Sharma",
        academicYear: "2026-27",
        totalFee: 125000,
        paidAmount: 125000,
        pendingAmount: 0,
        status: "Paid"
    },

    {
        studentId: "STU007",
        rollNumber: "107",
        studentName: "Ishaan Verma",
        academicYear: "2026-27",
        totalFee: 125000,
        paidAmount: 121000,
        pendingAmount: 4000,
        status: "Pending"
    },

    {
        studentId: "STU008",
        rollNumber: "108",
        studentName: "Kavya Nair",
        academicYear: "2026-27",
        totalFee: 125000,
        paidAmount: 125000,
        pendingAmount: 0,
        status: "Paid"
    },

    {
        studentId: "STU009",
        rollNumber: "109",
        studentName: "Manoj Patel",
        academicYear: "2026-27",
        totalFee: 125000,
        paidAmount: 115000,
        pendingAmount: 10000,
        status: "Pending"
    },

    {
        studentId: "STU010",
        rollNumber: "110",
        studentName: "Nisha Reddy",
        academicYear: "2026-27",
        totalFee: 125000,
        paidAmount: 123000,
        pendingAmount: 2000,
        status: "Pending"
    },

    {
        studentId: "STU011",
        rollNumber: "111",
        studentName: "Rahul Singh",
        academicYear: "2026-27",
        totalFee: 125000,
        paidAmount: 125000,
        pendingAmount: 0,
        status: "Paid"
    },

    {
        studentId: "STU012",
        rollNumber: "112",
        studentName: "Sneha Kapoor",
        academicYear: "2026-27",
        totalFee: 125000,
        paidAmount: 120000,
        pendingAmount: 5000,
        status: "Pending"
    },

    {
        studentId: "STU013",
        rollNumber: "113",
        studentName: "Vivek Reddy",
        academicYear: "2026-27",
        totalFee: 125000,
        paidAmount: 125000,
        pendingAmount: 0,
        status: "Paid"
    },

    {
        studentId: "STU014",
        rollNumber: "114",
        studentName: "Meera Joshi",
        academicYear: "2026-27",
        totalFee: 125000,
        paidAmount: 122000,
        pendingAmount: 3000,
        status: "Pending"
    },

    {
        studentId: "STU015",
        rollNumber: "115",
        studentName: "Aditya Rao",
        academicYear: "2026-27",
        totalFee: 125000,
        paidAmount: 125000,
        pendingAmount: 0,
        status: "Paid"
    }

]);


// ============================================================
// 10. NOTIFICATIONS
// 6 NOTIFICATIONS
// ============================================================

db.notifications.insertMany([

    {
        notificationId: "NOT001",
        recipientId: "STU001",
        recipientRole: "student",
        type: "attendance",
        title: "Attendance Marked",
        message: "Your Data Structures attendance was successfully verified.",
        status: "unread",
        timestamp: "2026-10-02 09:08:20"
    },

    {
        notificationId: "NOT002",
        recipientId: "FAC001",
        recipientRole: "faculty",
        type: "security",
        title: "Security Alert",
        message: "Multiple people were detected during attendance verification.",
        status: "unread",
        timestamp: "2026-10-02 09:20:31"
    },

    {
        notificationId: "NOT003",
        recipientId: "STU005",
        recipientRole: "student",
        type: "attendance_warning",
        title: "Attendance Warning",
        message: "Your attendance percentage requires attention.",
        status: "unread",
        timestamp: "2026-10-02 12:00:00"
    },

    {
        notificationId: "NOT004",
        recipientId: "FAC002",
        recipientRole: "faculty",
        type: "class_session",
        title: "Class Session Completed",
        message: "Operating Systems attendance session has been completed.",
        status: "read",
        timestamp: "2026-10-01 10:05:00"
    },

    {
        notificationId: "NOT005",
        recipientId: "STU012",
        recipientRole: "student",
        type: "fee",
        title: "Fee Reminder",
        message: "Your pending fee amount is ₹5,000.",
        status: "unread",
        timestamp: "2026-10-01 15:00:00"
    },

    {
        notificationId: "NOT006",
        recipientId: "FAC003",
        recipientRole: "faculty",
        type: "security",
        title: "Verification Alert",
        message: "A multiple-person detection event was recorded.",
        status: "unread",
        timestamp: "2026-10-01 11:25:45"
    }

]);


// ============================================================
// INDEXES
// ============================================================

db.admins.createIndex(
    { facultyId: 1 },
    { unique: true }
);

db.admins.createIndex(
    { username: 1 },
    { unique: true }
);

db.students.createIndex(
    { studentId: 1 },
    { unique: true }
);

db.students.createIndex(
    { rollNumber: 1 },
    { unique: true }
);

db.courses.createIndex(
    { courseId: 1 },
    { unique: true }
);

db.classrooms.createIndex(
    { classroomId: 1 },
    { unique: true }
);

db.class_sessions.createIndex(
    { sessionId: 1 },
    { unique: true }
);

db.attendance.createIndex(
    { attendanceId: 1 },
    { unique: true }
);

db.attendance.createIndex(
    { studentId: 1, date: -1 }
);

db.face_profiles.createIndex(
    { faceId: 1 },
    { unique: true }
);

db.face_profiles.createIndex(
    { studentId: 1 },
    { unique: true }
);

db.verification_audits.createIndex(
    { auditId: 1 },
    { unique: true }
);

db.fee_records.createIndex(
    { studentId: 1 },
    { unique: true }
);

db.notifications.createIndex(
    { notificationId: 1 },
    { unique: true }
);


// ============================================================
// FINAL DATABASE CHECK
// ============================================================

print("");
print("==============================================");
print("       SMARTATTEND DATABASE CREATED");
print("==============================================");

print("Database: SmartAttendDB");
print("");
print("Admins / Faculty       :", db.admins.countDocuments());
print("Students               :", db.students.countDocuments());
print("Courses                :", db.courses.countDocuments());
print("Classrooms             :", db.classrooms.countDocuments());
print("Class Sessions         :", db.class_sessions.countDocuments());
print("Attendance Records     :", db.attendance.countDocuments());
print("Face Profiles          :", db.face_profiles.countDocuments());
print("Verification Audits   :", db.verification_audits.countDocuments());
print("Fee Records            :", db.fee_records.countDocuments());
print("Notifications          :", db.notifications.countDocuments());

print("");
print("==============================================");
print("       SMARTATTEND DATABASE READY");
print("==============================================");