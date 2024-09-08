jWeb.extend('wpo', {
    fontAwesome: {
        improve: function(path) {
            var folders = ['brands', 'duotone', 'light', 'regular', 'sharp-light', 'sharp-regular',
                'sharp-solid', 'sharp-thin', 'solid', 'thin'];

            for (var i = 0; i < folders.length; i++) {
                var folder = folders[i];

                // TODO: add css class for fa-icon and replace image for before in the original el, same as fa do it.
                document.querySelectorAll('.fa-' + folder).forEach((el, i) => {
                    var otherClass = Array.from(el.classList)
                        .filter(item => item !== 'fa-' + folder);

                    var faClass = otherClass.find(cls => cls.startsWith('fa-'));
                    otherClass = otherClass.splice(otherClass.indexOf(faClass), 1);

                    var icon = faClass.replace('fa-', '') + '.svg';
                    var iconPath = path + '/' + folder + '/' + icon;

                    otherClass.push('fa-icon')
                    el.outerHTML = '<img src="' + iconPath + '" class="' + otherClass.join(' ') + '" />';
                });
            }
        }
    }
});