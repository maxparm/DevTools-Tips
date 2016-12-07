var presentation = {};

// Console
presentation.console = function () {
    console.error('This is an error!');
    console.warn('This is a warning!');
    console.assert(1 !== 1, '1 equals 1!');
    console.dir(document.body);
    console.table([{id: 1, name: "Maxime"}, {id: 2, name: "Numan"}, {id: 3, name: "Tony"}], ['name']);
    console.group('Objectives Page'); console.log('initialize'); console.groupEnd();
    console.time("Array initialize"); setTimeout(function () { console.timeEnd("Array initialize") }, 500);
    for (var i = 0; i < 100; i++) { if (i % 2) {console.count('Count'); }};
};


// Breakpoint
presentation.breakpoint = function () {
    function displayIdOfObjDelayed(obj) {
        setTimeout(function displayId() {
            console.log(obj.id);
        }, 10);
    }
    var arr = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}];
    for (var j = 0; j <= 10; j++) {
        displayIdOfObjDelayed(arr[j]);
    }
}


// Memory Leaks
var memoryLeakArray = [];
presentation.memoryLeak = function () {
    for (var i = 0; i < 10000; i++) {
        document.body.appendChild(document.createElement('div'));
    }
    memoryLeakArray.push(new Array(1000000).join('x'));
}


// Detached Nodes
var detachedTree;
presentation.detachedNodes = function () {
    var ul = document.createElement('ul');
    for (var i = 0; i < 10; i++) {
        var li = document.createElement('li');
        ul.appendChild(li);
    }
    detachedTree = ul;
}


// Allocation Timeline
var allocationTimelineArray = [];
presentation.allocationTimeline = function () {
  allocationTimelineArray.push(new Array(1000000).join('x'));
}
