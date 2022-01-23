console.log("Hello.. js file here!!!!!!!!!!!!")
var element = document.getElementById("years");
console.log(element);
element.innerText = getTotalExperience();

function getTotalExperience() {
  const date = new Date();
  let present = date.getFullYear();
  let totalExperience = present - 2016;
  console.log(totalExperience);
  return totalExperience + "+";
}

// var exampleModal = document.getElementById('staticBackdrop')
// exampleModal.addEventListener('show.bs.modal', function (event) {
//   // Button that triggered the modal
//   var button = event.relatedTarget
//   // Extract info from data-bs-* attributes
//   var companyExpButton = button.getAttribute('data-bs-whatever');
//   // If necessary, you could initiate an AJAX request here
//   // and then do the updating in a callback.
//   //
//   // Update the modal's content.
//   var modalTitle = exampleModal.querySelector('.modal-title')
//   var modalBodyInput = exampleModal.querySelector('.modal-body')

//   // var description = document.getElementById("exp-desc");
//   var ulElem = document.getElementById("ul-desc");
//   var expLists = document.getElementById("expList");



//   modalTitle.textContent = companyExpButton + ' Experience'
//   if (companyExpButton == "Amazon") {
//     removeExistingList(ulElem)

//     jsonData.amazon.data.forEach(element => {
//       let list = document.createElement('li');
//       list.setAttribute('id', 'expList');
//       list.innerText = element;
//       ulElem.appendChild(list);
//     });
//   }
//   else if (companyExpButton == "Paytm") {
//     removeExistingList(ulElem)

//     jsonData.paytm.data.forEach(element => {
//       let list = document.createElement('li');
//       list.setAttribute('id', 'expList');
//       list.innerText = element;
//       ulElem.appendChild(list);
//     });
//   }
// })

// function removeExistingList(ulElem){
//   console.log(ulElem.firstChild)
//   while( ulElem.firstChild ){
//     ulElem.removeChild( ulElem.firstChild );
//   }
// }


// var amzButton = document.getElementById('amazon-button');
// var paytmButton = document.getElementById('paytm-button');
// console.log(amzButton);
// console.log(paytmButton);

// var companyName = document.getElementById('companyName');
// var role = document.getElementById('role');
// var expPeriod = document.getElementById('exp-period');
// var expDesc = document.getElementById('exp-desc');


// var jsonData = {
//   "amazon": {
//     "exp": "Feb 2016 - Apr 2021",
//     "role": "Quality Assurance Engineer",
//     "data": [
//       "Owned quality and delivery of 100+ software releases to global customers across multiple products that include Prime Video and Prime core services.",
//       "Created and executed detailed test plans/strategies test cases for functional, non-functional testing to validate UI and backend services (Web and REST API).",
//       "Developed quality metrics to measure test effectiveness & maintained existing test suites to ensure software is delivered within target milestones.",
//       "Designed and developed scalable test frameworks ensuring automation first approach for each release and reduced test execution time.",
//       "Analyzed automation failures and fixed the flaky tests by adding retry mechanisms, waits, and moving tests to a different suite.",
//       "Onboarded device farm and integrated with pipelines, which reduced the manual effort and increased test effectivenes.",
//       "Communicated with development teams and integrated best practices that include code coverage, release notes, alarms, tweaked deployment times, and pre-prod smoke tests."
//     ]
//   },
//   "paytm": {
//     "exp": "Aug 2021 - Present",
//     "role": "Senior QA Automation Engineer",
//     "data": [
//       "Data1",
//       "Data2",
//       "Data3"
//     ]
//   }
// }

// function experienceButtonAction(btnCicked){
//     if(btnCicked == 'amazon'){
      
//       removeExistingList(expDesc);
//       companyName.innerText = "Amazon";
//       role.innerText = jsonData['amazon']['role'];
//       expPeriod.innerText = jsonData.amazon.exp;
      
//       jsonData.amazon.data.forEach(element => {
//         let list = document.createElement('li');
//         list.setAttribute('id', 'expList');
//         list.innerText = element;
//         expDesc.appendChild(list);
//       })
//     } 
//     else if(btnCicked = 'paytm'){
//       removeExistingList(expDesc);
//       companyName.innerText = "Paytm";
//       role.innerText = jsonData.paytm.role;
//       expPeriod.innerText = jsonData.paytm.exp;
      
//       jsonData.paytm.data.forEach(element => {
//         let list = document.createElement('li');
//         list.setAttribute('id', 'expList');
//         list.innerText = element;
//         expDesc.appendChild(list);
//       })
//     }
//   } 

// paytmButton.addEventListener('click', function(){experienceButtonAction('paytm')});
// amzButton.addEventListener('click', function(){experienceButtonAction('amazon')});