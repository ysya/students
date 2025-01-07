
**Problem1** \
Fix "Add New Notice" Page \
<mark>/app/notices/add</mark> \
When click the 'Save' button, 'description' doesn't be saved. \
<b>Fix it.</b>

### Solution
- should have a .git folder in the frontend folder to init husky

- src/domains/notice/pages/add-notice-page.tsx line 19, change `content` to `description` 

- src/domains/notice/components/notice-form.tsx line 89, change `{...register('content')}` to `{...register('description')}`

- roll should limit to number

**Problem2** \
Complete CRUD operation in Student management page. \
<mark>src/modules/students/students-controller.js</mark>

### Solution
#### find
- query string format is strange, if format is correct, should deal with that format in the controller or service, I fixed this in front-end in `src/utils/helpers/get-query-string.ts`
- maybe name could be query by LIKE for fuzzy search

#### create
- src/modules/departments/departments-service.js line 54, remove incorrect require

#### update
- src/modules/students/student-service.js function `updateStudent` should get userId and payload as parameters

#### update status
- src/modules/students/student-controller.js function `handleStudentStatus` should send reviewerId in `setStudentStatus` function

- src/modules/students/student-service.js 
  `setStudentStatus` should receive parameters in correct format