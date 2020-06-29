let sortable = Sortable.create(list, {
    group: "list",
    animation: 100
});


Sortable.create(hoge, {
    group: "save",
    store: {
        get: function (sortable) {
            var order = localStorage.getItem(sortable.options.group.name);
            return order ? order.split('|') : [];
        },
        set: function (sortable) {
            var order = sortable.toArray();
            localStorage.setItem(sortable.options.group.name, order.join('|'));
        }
    }
});



 var sample1 = document.getElementById('sample1');
 var sortable1 = Sortable.create(sample1);