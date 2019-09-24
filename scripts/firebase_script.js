// Set the configuration for your app
        // TODO: Replace with your project's config object
        var config = {
            apiKey: "AIzaSyBJ9uwJbrsjRkUGyChF75p6Z4eyMy-qnXM",
            authDomain: "fieldsence.firebaseapp.com",
            databaseURL: "https://fieldsence.firebaseio.com/",
            storageBucket: "bucket.appspot.com"
        };
        firebase.initializeApp(config);

        var userDataRef = firebase.database().ref('users');//.orderByKey();
        userDataRef.once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key;
                var childData = childSnapshot.val();
                if ($("#card" + key).length == 0) {
                   
                    var d = new Date(childData.timeInMillis);
                    $("#output").prepend('<div class="card fleetuser" id="card' + key + '"><div class="card-body"><span class="capitalize name">' + (childData.name) + '</span> from <span class="capitalize company">' + (childData.company) + '</span> has joined at ' + d.toLocaleString("en-US") + '</div></div>');
                }

            });
            
        });

        userDataRef.orderByChild('timeInMillis').startAt(Date.now()).on("child_added", function (data, prevChildKey) {
            var key = data.key;
            var childData = data.val();
            var d = new Date(childData.timeInMillis);
            $.notify("Hi " + childData.name + ", thank you for visiting our booth  at home delivery 2019 expo", "success");
            
        });

        


        

       


        



