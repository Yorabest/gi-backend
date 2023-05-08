
const BASE_URL = 'http://localhost:3000'

// // GET /students - повернути всіх студентів.

async function getAllStudents() {
   const res = await fetch(`${BASE_URL}/students`)
   const students = await res.json();
   console.log(students);
   return students    
}

// getAllStudents()

// // GET /students/:id - повернути студента за ідентифікатором.

async function getStudentById(studentId) {
  const res =  await fetch(`${BASE_URL}/students/${studentId}`)
    const student = await res.json()
    //    console.log(student);
    return student
}

// getStudentById(1)

// // POST /students - додати нового студента.

const newStudent = {
    "name": "Lisa Gold",
      "age": 21,
      "email": "lisa.gold@example.com",
      "phone": "555-3535"
}

async function postNewStudent(newStudent) {
    const options = {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(newStudent)
    }
    
    const res = await fetch(`${BASE_URL}/students`, options)
    const student = await res.json()
    //  console.log(student);
    return student
}

// postNewStudent(newStudent)

// // PUT /students/:id - оновити інформацію про студента за ідентифікатором.

const updatePut ={
    "name": "Lisa Holl",
      "age": 22,
      "email": "lisa.gold@example.com",
      "phone": "555-3535"
}

async function updateStudentAllInfo(update, studentId) {
    const options = {
    method: 'PUT',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(update)
    }
    
    const res = await fetch(`${BASE_URL}/students/${studentId}`, options)
    const student = await res.json()
    //  console.log(student);
    return student
}

// updateStudentAllInfo(updatePut, 4)

// // PATCH /students/:id - оновити часткову інформацію про студента за ідентифікатором.

 const update ={
      "age": 23,
}

async function updateStudentInfo(update, studentId) {
    const options = {
    method: 'PATCH',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(update)
    }
    
    const res = await  fetch(`${BASE_URL}/students/${studentId}`, options)
     const student = await res.json()
    return student
}

// updateStudentInfo(update, 4)

// DELETE /students/:id - видалити студента за ідентифікатором.

async function deleteStudent(studentId) {
   const res = await fetch(`${BASE_URL}/students/${studentId}`, {method: 'DELETE'})
    const stud = await res.json()
    return stud
}

// deleteStudent(5)

// GET /students?age=:age - повернути всіх студентів з вказаним віком.

async function getStudentByAge(studentAge) {
    const res = await fetch(`${BASE_URL}/students?age=${studentAge}`)
    const student = await res.json()
    return student
}

// getStudentByAge(20)

// GET /students?name=:name - повернути всіх студентів з вказаним ім'ям.

async function getStudentByName(studentName) {
   const res = await fetch(`${BASE_URL}/students?name=${studentName}`)
    const student = await res.json()
    return student
}

// getStudentByName("Bob Johnson")

// GET /students?email=:email - повернути студента з вказаною електронною поштою.

async function getStudentByEmail(studentEmail) {
    const res = await fetch(`${BASE_URL}/students?email=${studentEmail}`)
    const student = await res.json()
    return student
}

// getStudentByEmail("jane.smith@example.com")

// GET /students?phone=:phone - повернути студента з вказаним номером телефону.

async function getStudentByPhone(studentPhone) {
    const res = await fetch(`${BASE_URL}/students?phone=${studentPhone}`)
    const student = await res.json()
    return student
}

// getStudentByPhone("555-1234")