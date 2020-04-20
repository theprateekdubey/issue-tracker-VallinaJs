/*using function*/
/*
var issues=['issue1','issue2','issue3'];

function addIssue(issue){
    issues.push(issue);
    displayIssues();
}

function displayIssues(){
    console.log('My Issues : ', issues)
}

function changeIssue(position , newIssue){
    issues[position]=newIssue;
    displayIssues();
}
function deleteIssue(position){
    issues.splice(position,1);
    displayIssues();
}
*/

/*Using OBJECT*/
/*
var issueList={
    
    issues:['issue1','issue2','issue3'],

    displayIssues:function(){
        console.log('My Issues : ', this.issues)
    },

    addIssue:function(issue){
        this.issues.push(issue);
        this.displayIssues();
    },

    changeIssue:function(position,newIssue){
        this.issues[position]=newIssue;
        this.displayIssues();
    },

    deleteIssue:function(position){
        this.issues.splice(position,1);
        this.displayIssues();
    },
};*/

/*BOOLEAN TOGGLE*/
/*
var issueList={
    
    issues:[],

    displayIssues:function(){
        //if there is no issue display there is no issue
        if (this.issues.length===0) {
            console.log('there is no issue ')
        }
      //otherwise display the list of issue
        else{
        var issueWithCompletedStatus='';
        //completed===true --() issueText
        //completed===false --(x) issueText
            console.log('My Issues : ');
            for(var i=0 ;i<this.issues.length;i++){
                var issue=this.issues[i];
                if (issue.completed===true) {
                    issueWithCompletedStatus = '(x)' +  issue.issueText;
                } else {
                    issueWithCompletedStatus = '()' +  issue.issueText;
                }
            console.log(issueWithCompletedStatus);
            }
        }
    },

    addIssue:function(issueText){
        this.issues.push({
            issueText:issueText,
            completed:false
        });
        this.displayIssues();
    },

    changeIssue:function(position,newIssue){
        this.issues[position].issueText=newIssue;
        this.displayIssues();
    },

    deleteIssue:function(position){
        this.issues.splice(position,1);
        this.displayIssues();
    },

    toggleComplete:function(position){
       var issue = this.issues[position];
       issue.completed=!issue.completed;
       this.displayIssues();
    },
};
*/
/*TOGGLE ALL Feature*/
var issueList={
    
    issues:[],

   /* displayIssues:function(){
        //if there is no issue display there is no issue
        if (this.issues.length===0) {
            console.log('there is no issue ')
        }
      //otherwise display the list of issue
        else{
        var issueWithCompletedStatus='';
        //completed===true --() issueText
        //completed===false --(x) issueText
            console.log('My Issues : ');
            for(var i=0 ;i<this.issues.length;i++){
                var issue=this.issues[i];
                if (issue.completed===true) {
                    issueWithCompletedStatus = '(x)' +  issue.issueText;
                } else {
                    issueWithCompletedStatus = '()' +  issue.issueText;
                }
            console.log(issueWithCompletedStatus);
            }
        }
    },*/

    addIssue:function(issueText){
        this.issues.push({
            issueText:issueText,
            completed:false
        });
       /* this.displayIssues();*/
    },

    changeIssue:function(position,newIssue){
        this.issues[position].issueText=newIssue;
         /* this.displayIssues();*/
    },

    deleteIssue:function(position){
        this.issues.splice(position,1);
         /* this.displayIssues();*/
    },

    toggleComplete:function(position){
       var issue = this.issues[position];
       issue.completed=!issue.completed;
        /* this.displayIssues();*/
    },

    toggleAll:function(){
        var totalIssues=this.issues.length;
        var completedIssues=0;
        //get total completed issues
        for( var i=0;i<totalIssues;i++){
            if (this.issues[i].completed===true) {
                completedIssues++;
            }
        }
        // Case 1:  if everything is true , make everything false
        if (totalIssues===completedIssues) {
            for(var i=0; i<totalIssues;i++){
                this.issues[i].completed=false;
            }
        }
        // Case 2: otherwise make everything false 
        else{
            for(var i=0;i<totalIssues;i++){
                this.issues[i].completed=true;
            }
        }
         /* this.displayIssues();*/  
    },
};

/*USing js listners*/
/*
var displayIssues=document.getElementById('displayIssues');
displayIssues.addEventListener('click',function(){
    issueList.displayIssues();
});

var toggleAll=document.getElementById('toggleAll');
toggleAll.addEventListener('click',function(){
    issueList.toggleAll();
});
*/

/*Using objects*/
var handlers={
    displayIssues:function(){
        issueList.displayIssues();
    },

    toggleAll:function(){
        issueList.toggleAll();
        view.displayIssues();
    },

    addIssue:function(){
        var addIssueText = document.getElementById('addIssueText');
        issueList.addIssue(addIssueText.value);
        view.displayIssues();
        addIssueText.value='';
    },

    changeIssue:function(){
        var changeIssuePositionInput=document.getElementById('changeIssuePositionInput');
        var changeIssueTextInput=document.getElementById('changeIssueTextInput');
        issueList.changeIssue(changeIssuePositionInput.valueAsNumber,changeIssueTextInput.value);
        view.displayIssues();
        changeIssuePositionInput.value='';
        changeIssueTextInput.value='';
    },
    deleteIssue:function(position){
       // var deleteIssuePositionInput=document.getElementById('deleteIssuePositionInput');
        issueList.deleteIssue(position);
        view.displayIssues();
        //deleteIssuePositionInput.value='';
    },
    toggleComplete:function(){
        var toggleIssuePositionInput=document.getElementById('toggleIssuePositionInput');
        issueList.toggleComplete(toggleIssuePositionInput.value);
        view.displayIssues();
        toggleIssuePositionInput.value='';
    } 
};

var view = {
    displayIssues :  function () {
        var issueUl = document.querySelector('ul');
        issueUl.innerHTML = '';
        
        for(var i=0; i<issueList.issues.length;i++){
            var issueLi = document.createElement('li');
            var issue = issueList.issues[i];
            var issueTextWithCompletion = '';
            if(issue.completed === true){
                issueTextWithCompletion = '(X) '+issue.issueText;
            }
            else{
                issueTextWithCompletion = '() '+issue.issueText;
            }
            issueLi.id = i; // adding id that is received from the iteration
            issueLi.textContent = issueTextWithCompletion;
            issueLi.appendChild(this.createDeleteButton()); // call createDeleteButton and appending as a child node in issueList
            issueUl.appendChild(issueLi);
        }
        
    },

    createDeleteButton: function () {
        var deleteButton;
        deleteButton =  document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteIssue';
        return deleteButton;
    },
    setUpEventListener: function(){
    var issuesUl =  document.querySelector('ul');
    issuesUl.addEventListener('click',function(event){
    // get the target element that is clicked
    var elementClicked =  event.target;
    // check if element clicked is deleteIssue button
    if(elementClicked.className === 'deleteIssue'){
        // call handlers deleteIssue method
        handlers.deleteIssue(parseInt(elementClicked.parentNode.id));
    }
    
});
/*
Note : 
Target :  target property that tells about the target clicked. 
parentNode :  li is the parent node in this case
id: id is the attribute of li*/
    }
};

view.setUpEventListener();

