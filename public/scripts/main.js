// Java script para modulo 3, mobile

$(function () {

    singlePage();
    burgerMenu();
    gameTable();
    addPost();
    getLocation();
}); 


function gameTable(){
    var data = datagame;

    while(data.rows> 0){
        data.deleteRow(0);
    };

    var myTable = $("#infotable");
    var tbody = document.createElement("tbody");

    //class active cuando le das al boton
    var botonon = $(".fechas").on("click", function(){

        $(".fechas").removeClass("active");
        $(this).addClass("active");

        //        console.log($(this)[0].childNodes[0].data);
        //        return $(this)[0].childNodes[0].data;
        var x =  $(this)[0].innerText;
        createTable(x);


    })





    };

//se llama dentro de gameTable
function createTable(x){
    var data = datagame;
    var myTable = $("#infotable");

    myTable.empty();



    for(var i = 0; i<data.length; i++){

        var dia = data[i].day;
        //        var x =  $(this)[i].childNodes[0].data;
        console.log(x);
        console.log(dia);
        console.log(x == dia);


        if (dia == x){
            var row = document.createElement("tr");
            var equipos = data [i].team;
            var lugar = data [i].location;
            var hora = data [i].time;
            var day = data[i].day;


            row.insertCell().append(equipos);
            row.insertCell().append(lugar);
            row.insertCell().append(hora);
            row.insertCell().append(day);
            myTable.append(row);




        }
    }
};

function burgerMenu(){
    $('.nav a').on('click', function(){
        $('.btn-navbar').click(); //bootstrap 2.x
        $('.navbar-toggle').click() //bootstrap 3.x by Richard
    })
};

function singlePage(){
    $("#home").show();
    $("#about").hide();
    $("#registration").hide();
    $("#gameinfo").hide();
    $("#maps").hide();
    $("#login").hide();
    $("#message").hide();
    $("#register").hide();
    $("#rules").hide();
    $("#contact").hide();
    $("#comments-container").hide();
    $("#star").hide();
    $("#text").hide();
    

    $("#home-content").click(function(){
        $("#home").show();
        $("#about").hide();
        $("#registration").hide();
        $("#gameinfo").hide();
        $("#maps").hide();
        $("#login").hide();
        $("#message").hide();
        $("#rules").hide();
        $("#contact").hide();

    });

    $("#about-content").click(function(){
        $("#about").show();
        $("#registration").hide();
        $("#gameinfo").hide();
        $("#maps").hide();
        $("#login").hide();
        $("#message").hide();
        $("#rules").hide();
        $("#contact").hide();
        $("#home").hide();

    });

    $("#registration-content").click(function(){
        $("#registration").show();
        $("#home").hide();
        $("#about").hide();
        $("#gameinfo").hide();
        $("#maps").hide();
        $("#login").hide();
        $("#message").hide();
        $("#rules").hide();
        $("#contact").hide();
    });

    $("#gameinfo-content").click(function(){
        $("#gameinfo").show();
        $("#home").hide();
        $("#about").hide();
        $("#registration").hide();
        $("#maps").hide();
        $("#login").hide();
        $("#message").hide();
        $("#rules").hide();
        $("#contact").hide();
    });

    $("#maps-content").click(function(){
        $("#maps").show();
        $("#home").hide();
        $("#about").hide();
        $("#registration").hide();
        $("#gameinfo").hide();
        $("#login").hide();
        $("#message").hide();
        $("#rules").hide();
        $("#contact").hide();
    });

    $("#login-content").click(function(){
        $("#login").show();
        $("#home").hide();
        $("#about").hide();
        $("#registration").hide();
        $("#gameinfo").hide();
        $("#rules").hide();
        $("#maps").hide();
        $("#message").hide();
        $("#contact").hide();
    });

    $("#register-content").click(function(){
        $("#register").show();
        $("#home").hide();
        $("#about").hide();
        $("#registration").hide();
        $("#gameinfo").hide();
        $("#rules").hide();
        $("#maps").hide();
        $("#message").hide();
        $("#login").hide();
        $("#contact").hide();
    });

    $("#message-content").click(function(){
        $("#message").show();
        $("#home").hide();
        $("#about").hide();
        $("#registration").hide();
        $("#gameinfo").hide();
        $("#rules").hide();
        $("#maps").hide();
        $("#login").hide();
        $("#contact").hide();
    });

    $("#rules-content").click(function(){
        $("#rules").show();
        $("#home").hide();
        $("#about").hide();
        $("#registration").hide();
        $("#gameinfo").hide();
        $("#maps").hide();
        $("#login").hide();
        $("#message").hide();
        $("#contact").hide();
    });

    $("#contact-content").click(function(){
        $("#contact").show();
        $("#home").hide();
        $("#about").hide();
        $("#registration").hide();
        $("#gameinfo").hide();
        $("#rules").hide();
        $("#maps").hide();
        $("#login").hide();
        $("#message").hide();
    });

};

function landscapeInfo(){
    var data = datagame;
    var mapinfo = $("#mapinfo");
    var locationinfo = $("#locationinfo");

    for (var i=0;i<data;i++){
        var school = data[i].location;
        var address = data[i].address;
        var day = data[i].day;
        var team = data[i].team;
        var time = data[i].time;
        var iframe = data[i].iframe;


        var inline =$('<div class="inline"/>');
        var mapinfo =$('<div class="mapinfo"/>');
        var schoolname =$('<h2 id="schoolname"/>');
        var direccion=$('<p id="address"></p>');
        var dia=$('<p id="day"></p>');
        var equipo=$('<p id="team"></p>');
        var hora=$('<p id="time"></p>');

        var locationinfo=$('<div class="locationinfo"/>');
        var mapa=$('<p id="frame"></p>');


        school.innerHTML=schoolname;
        address.innerHTML=direccion;
        day.innerHTML=dia;
        team.innerHTML=equipo;
        time.innerHTML=hora;
        iframe.innerHTML=mapa;

        //bloque con la informacion
        inline.append(mapinfo);
        mapinfo.append(schoolname);
        mapinfo.append(divider);
        mapinfo.append(dia);
        mapinfo.append(equipo);
        mapinfo.append(hora);


        // bloque con el mapa
        inline.append(locationinfo);
        locationinfo.append(mapa);


        // bloque con todo
        landscapeinfo.append(inline);

    }
};

function addPost(){

    'use strict';

    // Shortcuts to DOM Elements.
    var messageForm = document.getElementById('message-form');
    var messageInput = document.getElementById('new-post-message');
    var titleInput = document.getElementById('new-post-title');
    var signInButton = document.getElementById('sign-in-button');
    var signOutButton = document.getElementById('sign-out-button');
    var splashPage = document.getElementById('page-splash');
    var addPost = document.getElementById('add-post');
    var addButton = document.getElementById('add');
    var recentPostsSection = document.getElementById('recent-posts-list');
    var userPostsSection = document.getElementById('user-posts-list');
    var topUserPostsSection = document.getElementById('top-user-posts-list');
    var recentMenuButton = document.getElementById('menu-recent');
    var myPostsMenuButton = document.getElementById('menu-my-posts');
    var myTopPostsMenuButton = document.getElementById('menu-my-top-posts');
    var listeningFirebaseRefs = [];

    /**
 * Saves a new post to the Firebase DB.
 */
    // [START write_fan_out]
    function writeNewPost(uid, username, picture, title, body) {
        // A post entry.
        var postData = {
            author: username,
            uid: uid,
            body: body,
            title: title,
            starCount: 0,
            authorPic: picture
        };

        // Get a key for a new Post.
        var newPostKey = firebase.database().ref().child('posts').push().key;

        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['/posts/' + newPostKey] = postData;
        updates['/user-posts/' + uid + '/' + newPostKey] = postData;

        return firebase.database().ref().update(updates);
    }
    // [END write_fan_out]

    /**
 * Star/unstar post.
 */
    // [START post_stars_transaction]
    function toggleStar(postRef, uid) {
        postRef.transaction(function(post) {
            if (post) {
                if (post.stars && post.stars[uid]) {
                    post.starCount--;
                    post.stars[uid] = null;
                } else {
                    post.starCount++;
                    if (!post.stars) {
                        post.stars = {};
                    }
                    post.stars[uid] = true;
                }
            }
            return post;
        });
    }
    // [END post_stars_transaction]

    /**
 * Creates a post element.
 */


    function createPostElement(postId, title, text, author, authorId, authorPic) {
        var uid = firebase.auth().currentUser.uid;

        var html =
            '<div class="post post-' + postId + 
            ' mdl-cell mdl-cell--12-col ' +
            'mdl-cell--6-col-tablet mdl-cell--4-col-desktop mdl-grid mdl-grid--no-spacing">' +
            '<div class="mdl-card mdl-shadow--2dp">' +
            '<div class="mdl-card__title mdl-color--green-600 mdl-color-text--white">' +
            '<div>' +
            '<div class="avatar"></div>' +
            '<div class="username mdl-color-text--black"></div>' +
            '</div>' +
            '</div>' +
            '<div class="header">' +
            '<h4 class="mdl-card__title-text"></h4>' +
            '</div>' +
            '<span class="star">' +
            '<div class="not-starred material-icons">star_border</div>' +
            '<div class="starred material-icons">star</div>' +
            '<div class="star-count">0</div>' +
            '</span>' +
            '<div class="text"></div>' +
            '<div class="comments-container"></div>' +
            '<form class="add-comment" action="#">' +
            '<div class="mdl-textfield mdl-js-textfield">' +
            '<input class="mdl-textfield__input new-comment" type="text">' +
            '<label class="mdl-textfield__label">Comment...</label>' +
            '</div>' +
            '</form>' +
            '</div>' +
            '</div>';
        
        
        

        // Create the DOM element from the HTML.
        var div = document.createElement('div');
        div.innerHTML = html;
        var postElement = div.firstChild;
        if (componentHandler) {
            componentHandler.upgradeElements(postElement.getElementsByClassName('mdl-textfield')[0]);
        }

        var addCommentForm = postElement.getElementsByClassName('add-comment')[0];
        var commentInput = postElement.getElementsByClassName('new-comment')[0];
        var star = postElement.getElementsByClassName('starred')[0];
        var unStar = postElement.getElementsByClassName('not-starred')[0];

        // Set values.
        postElement.getElementsByClassName('text')[0].innerText = text;
        postElement.getElementsByClassName('mdl-card__title-text')[0].innerText = title;
        postElement.getElementsByClassName('username')[0].innerText = author || 'Anonymous';
        postElement.getElementsByClassName('avatar')[0].style.backgroundImage = 'url("' +
            (authorPic || './silhouette.jpg') + '")';

        // Listen for comments.
        // [START child_event_listener_recycler]
        var commentsRef = firebase.database().ref('post-comments/' + postId);
        commentsRef.on('child_added', function(data) {
            addCommentElement(postElement, data.key, data.val().text, data.val().author);
        });

        commentsRef.on('child_changed', function(data) {
            setCommentValues(postElement, data.key, data.val().text, data.val().author);
        });

        commentsRef.on('child_removed', function(data) {
            deleteComment(postElement, data.key);
        });
        // [END child_event_listener_recycler]

        // Listen for likes counts.
        // [START post_value_event_listener]
        var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
        starCountRef.on('value', function(snapshot) {
            updateStarCount(postElement, snapshot.val());
        });
        // [END post_value_event_listener]

        // Listen for the starred status.
        var starredStatusRef = firebase.database().ref('posts/' + postId + '/stars/' + uid)
        starredStatusRef.on('value', function(snapshot) {
            updateStarredByCurrentUser(postElement, snapshot.val());
        });

        // Keep track of all Firebase reference on which we are listening.
        listeningFirebaseRefs.push(commentsRef);
        listeningFirebaseRefs.push(starCountRef);
        listeningFirebaseRefs.push(starredStatusRef);

        // Create new comment.
        addCommentForm.onsubmit = function(e) {
            e.preventDefault();
            createNewComment(postId, firebase.auth().currentUser.displayName, uid, commentInput.value);
            commentInput.value = '';
            commentInput.parentElement.MaterialTextfield.boundUpdateClassesHandler();
        };

        // Bind starring action.
        var onStarClicked = function() {
            var globalPostRef = firebase.database().ref('/posts/' + postId);
            var userPostRef = firebase.database().ref('/user-posts/' + authorId + '/' + postId);
            toggleStar(globalPostRef, uid);
            toggleStar(userPostRef, uid);
        };
        unStar.onclick = onStarClicked;
        star.onclick = onStarClicked;

        return postElement;
    }

    /**
 * Writes a new comment for the given post.
 */
    function createNewComment(postId, username, uid, text) {
        firebase.database().ref('post-comments/' + postId).push({
            text: text,
            author: username,
            uid: uid
        });
    }

    /**
 * Updates the starred status of the post.
 */
    function updateStarredByCurrentUser(postElement, starred) {
        if (starred) {
            postElement.getElementsByClassName('starred')[0].style.display = 'inline-block';
            postElement.getElementsByClassName('not-starred')[0].style.display = 'none';
        } else {
            postElement.getElementsByClassName('starred')[0].style.display = 'none';
            postElement.getElementsByClassName('not-starred')[0].style.display = 'inline-block';
        }
    }

    /**
 * Updates the number of stars displayed for a post.
 */
    function updateStarCount(postElement, nbStart) {
        postElement.getElementsByClassName('star-count')[0].innerText = nbStart;
    }

    /**
 * Creates a comment element and adds it to the given postElement.
 */
    function addCommentElement(postElement, id, text, author) {
        var comment = document.createElement('div');
        comment.classList.add('comment-' + id);
        comment.innerHTML = '<span class="username"></span><span class="comment"></span>';
        comment.getElementsByClassName('comment')[0].innerText = text;
        comment.getElementsByClassName('username')[0].innerText = author || 'Anonymous';

        var commentsContainer = postElement.getElementsByClassName('comments-container')[0];
        commentsContainer.appendChild(comment);
    }

    /**
 * Sets the comment's values in the given postElement.
 */
    function setCommentValues(postElement, id, text, author) {
        var comment = postElement.getElementsByClassName('comment-' + id)[0];
        comment.getElementsByClassName('comment')[0].innerText = text;
        comment.getElementsByClassName('fp-username')[0].innerText = author;
    }

    /**
 * Deletes the comment of the given ID in the given postElement.
 */
    function deleteComment(postElement, id) {
        var comment = postElement.getElementsByClassName('comment-' + id)[0];
        comment.parentElement.removeChild(comment);
    }

    /**
 * Starts listening for new posts and populates posts lists.
 */
    function startDatabaseQueries() {
        // [START my_top_posts_query]
        var myUserId = firebase.auth().currentUser.uid;
        var topUserPostsRef = firebase.database().ref('user-posts/' + myUserId).orderByChild('starCount');
        // [END my_top_posts_query]
        // [START recent_posts_query]
        var recentPostsRef = firebase.database().ref('posts').limitToLast(100);
        // [END recent_posts_query]
        var userPostsRef = firebase.database().ref('user-posts/' + myUserId);

        var fetchPosts = function(postsRef, sectionElement) {
            postsRef.on('child_added', function(data) {
                var author = data.val().author || 'Anonymous';
                var containerElement = sectionElement.getElementsByClassName('posts-container')[0];
                containerElement.insertBefore(
                    createPostElement(data.key, data.val().title, data.val().body, author, data.val().uid, data.val().authorPic),
                    containerElement.firstChild);
            });
            postsRef.on('child_changed', function(data) {	
                var containerElement = sectionElement.getElementsByClassName('posts-container')[0];
                var postElement = containerElement.getElementsByClassName('post-' + data.key)[0];
                postElement.getElementsByClassName('mdl-card__title-text')[0].innerText = data.val().title;
                postElement.getElementsByClassName('username')[0].innerText = data.val().author;
                postElement.getElementsByClassName('text')[0].innerText = data.val().body;
                postElement.getElementsByClassName('star-count')[0].innerText = data.val().starCount;
            });
            postsRef.on('child_removed', function(data) {
                var containerElement = sectionElement.getElementsByClassName('posts-container')[0];
                var post = containerElement.getElementsByClassName('post-' + data.key)[0];
                post.parentElement.removeChild(post);
            });
        };

        // Fetching and displaying all posts of each sections.
        //fetchPosts(topUserPostsRef, topUserPostsSection);
        fetchPosts(recentPostsRef, recentPostsSection);
        //fetchPosts(userPostsRef, userPostsSection);

        // Keep track of all Firebase refs we are listening to.
        listeningFirebaseRefs.push(topUserPostsRef);
        listeningFirebaseRefs.push(recentPostsRef);
        listeningFirebaseRefs.push(userPostsRef);
    }

    /**
 * Writes the user's data to the database.
 */
    // [START basic_write]
    function writeUserData(userId, name, email, imageUrl) {
        firebase.database().ref('users/' + userId).set({
            username: name,
            email: email,
            profile_picture : imageUrl
        });
    }
    // [END basic_write]

    /**
 * Cleanups the UI and removes all Firebase listeners.
 */
    function cleanupUi() {
        // Remove all previously displayed posts.
        /*
        topUserPostsSection.getElementsByClassName('posts-container')[0].innerHTML = '';*/
        recentPostsSection.getElementsByClassName('posts-container')[0].innerHTML = '';
        /*
        userPostsSection.getElementsByClassName('posts-container')[0].innerHTML = '';*/

        // Stop all currently listening Firebase listeners.
        listeningFirebaseRefs.forEach(function(ref) {
            ref.off();
        });
        listeningFirebaseRefs = [];
    }

    /**
 * The ID of the currently signed-in User. We keep track of this to detect Auth state change events that are just
 * programmatic token refresh but not a User status change.
 */
    var currentUID;

    //-----------------------cambio de datos del usuario-----utilidad en caso de tner registro---------------------------------------------------------------------

    function onAuthStateChanged(user) {
        // We ignore token refresh events.
        if (user && currentUID === user.uid) {
            return;
        }

        cleanupUi();
        if (user) {
            currentUID = user.uid;
            //splashPage.style.display = 'none';
            $("#sign-in-button").hide();
            $("#sign-out-button").show();

            writeUserData(user.uid, user.displayName, user.email, user.photoURL);
            startDatabaseQueries();
        } else {
            // Set currentUID to null.
            $("#sign-in-button").show();
            $("#sign-out-button").hide();
            currentUID = null;
            // Display the splash page where you can sign-in.
            //splashPage.style.display = '';

        }
    }

    /**
 * Creates a new post for the current user.
 */
    function newPostForCurrentUser(title, text) {
        // [START single_value_read]
        var userId = firebase.auth().currentUser.uid;
        return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
            var username = snapshot.val().username;
            // [START_EXCLUDE]
            return writeNewPost(firebase.auth().currentUser.uid, username,
                                firebase.auth().currentUser.photoURL,
                                title, text);
            // [END_EXCLUDE]
        });
        // [END single_value_read]
    }

    /**
 * Displays the given section element and changes styling of the given button.
 */
    function showSection(sectionElement, buttonElement) {
        recentPostsSection.style.display = 'block';
        /*userPostsSection.style.display = 'block';
        topUserPostsSection.style.display = 'block';
        addPost.style.display = 'block';*/
        recentMenuButton.classList.remove('is-active');
        /*myPostsMenuButton.classList.remove('is-active');
        myTopPostsMenuButton.classList.remove('is-active');*/

        if (sectionElement) {
            sectionElement.style.display = 'block';
        }
        if (buttonElement) {
            buttonElement.classList.add('is-active');
        }
    }

    // Bindings on load.
    window.addEventListener('load', function() {
        // Bind Sign in button.
        signInButton.addEventListener('click', function() {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider);
        });

        // Bind Sign out button.
        signOutButton.addEventListener('click', function() {
            firebase.auth().signOut();
        });

        // Listen for auth state changes
        firebase.auth().onAuthStateChanged(onAuthStateChanged);

        // Saves message on form submit.
        messageForm.onsubmit = function(e) {
            e.preventDefault();
            var text = messageInput.value;
            var title = titleInput.value;
            if (text && title) {
                newPostForCurrentUser(title, text).then(function() {
                    recentPostsSection.click();
                });
                messageInput.value = '';
                titleInput.value = '';
            }
        };

        // Bind menu buttons.
        /*
        recentMenuButton.onclick = function() {
            showSection(recentPostsSection, recentMenuButton);
        };*/
        /*
        myPostsMenuButton.onclick = function() {
            showSection(userPostsSection, myPostsMenuButton);
        };
        myTopPostsMenuButton.onclick = function() {
            showSection(topUserPostsSection, myTopPostsMenuButton);
        };
        addButton.onclick = function() {
            showSection(addPost);
            messageInput.value = '';
            titleInput.value = '';
        };*/
        /*
        recentMenuButton.onclick();
        */
    }, false);
};// fin de la funcion addPost

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&sensor=false&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}
//To use this code on your website, get a free API key from Google.
//Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}


//aviso alert de permitiar tu ubicacion para buscar el mapa

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
/*
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}*/

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
