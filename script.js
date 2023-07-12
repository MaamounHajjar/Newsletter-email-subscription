function verify() {
    e = document.getElementById("email").value;
    if (!verifyEmail(e)) {
        document.getElementById("error").innerText = "Valid email required";
        email.style.backgroundColor = 'hsl(4, 100%, 90%)';
        email.style.color = 'hsl(4, 100%, 67%)';
        return false;
    }
    else {
        localStorage.setItem('email', e);
        window.location.href = 'done.html';
    }
}

function getEmail() {
    email = localStorage.getItem("email");
    document.getElementById('success-text').textContent = email;
}




function verifyEmail(e) {
    att = e.indexOf("@");
    dot = e.indexOf(".");
    st1 = e.substring(0,att);
    st2 = e.substring(att+1,dot);
    st3 = e.substring(dot+1,e.length);
    if (!alphanumeric(st1) || !alpha(st2) || !alpha(st3) || st1 == "" || st2 == "" || st3.length < 2 || st3.length > 3 ){
        return false;
    }
    return true;
}

function alphanumeric(st) {
    for (let i = 0; i < st.length; i++) {
      const charCode = st.charCodeAt(i);
      if (
        !(charCode > 47 && charCode < 58) && // Numeric (0-9)
        !(charCode > 64 && charCode < 91) && // Upper alpha (A-Z)
        !(charCode > 96 && charCode < 123) // Lower alpha (a-z)
      ) {
        return false;
      }
    }
    return true;
  }

function alpha(st) {
    for (let i = 0; i < st.length; i++) {
      const charCode = st.charCodeAt(i);
      if (
        !(charCode > 64 && charCode < 91) && // Upper alpha (A-Z)
        !(charCode > 96 && charCode < 123) // Lower alpha (a-z)
      ) {
        return false;
      }
    }
    return true;
  }