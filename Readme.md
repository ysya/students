
**Problem1** \
Fix "Add New Notice" Page \
<mark>/app/notices/add</mark> \
When click the 'Save' button, 'description' doesn't be saved. \
<b>Fix it.</b>

#### Solution
- should have a .git folder in the frontend folder to init husky

- in line 19 of /src/domains/notice/pages/add-notice-page.tsx, change `content` to `description` 

- in line 89 of /src/domains/notice/components/notice-form.tsx, change `{...register('content')}` to `{...register('description')}`

- roll should limit to number

**Problem2** \
Complete CRUD operation in Student management page. \
<mark>/src/modules/students/students-controller.js</mark>

#### Solution

#### create
- src/modules/departments/departments-service.js line 54, remove incorrect require

#### update
- src/modules/students/student-service.js function `updateStudent` should get userId and payload as parameters

#### update status
- src/modules/students/student-controller.js function `handleStudentStatus` should send reviewerId in `setStudentStatus` function

- src/modules/students/student-service.js 
  `setStudentStatus` should receive parameters in correct format