const firebaseConfig = {
  apiKey: "AIzaSyAUi_5Pr1URJeKkqDffLE7MTfvNiQiM4JI",
  authDomain: "rideconnect-49829.firebaseapp.com",
  databaseURL: "https://rideconnect-49829-default-rtdb.firebaseio.com",
  projectId: "rideconnect-49829",
  storageBucket: "rideconnect-49829.appspot.com",
  messagingSenderId: "959815451830",
  appId: "1:959815451830:web:44e0daebabfd72c5031217"
};


  //Initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
  var contactFormDB = firebase.database().ref("contactForm");

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e){
      e.preventDefault();





      var name = getElementVal("name");
      var userName = getElementVal("userName");
      var email = getElementVal("email");
      var password = getElementVal("password");



      saveMessages(name, userName, email, password);
     

      
  }



  const saveMessages = (name, userName, email, password) => {
    var newContactForm = contactFormDB.push();
    
    newContactForm.set({
      name : name,
      userName : userName,
      email : email,
      paassword : password,
      
    });
  };

      

