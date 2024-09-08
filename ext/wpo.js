jWeb.extend('wpo', {
    fontAwesome: {
        improve: function(path) {
            var folders = ['brands', 'duotone', 'light', 'regular', 'sharp-light', 'sharp-regular',
                'sharp-solid', 'sharp-thin', 'solid', 'thin'];

            for (var i = 0; i < folders.length; i++) {
                var folder = folders[i];

                document.querySelectorAll('.fa-' + folder).forEach((el, i) => {
                    var otherClass = Array.from(el.classList)
                        .filter(item => item !== 'fa-' + folder);

                    var faClass = otherClass.find(cls => cls.startsWith('fa-'));
                    otherClass = otherClass.splice(otherClass.indexOf(faClass), 1);

                    var icon = faClass.replace('fa-', '') + '.svg';
                    var iconPath = path + '/' + folder + '/' + icon;
                    console.log('folder: ' + folder);
                    console.log('iconPath: ' + iconPath);

                    otherClass.push('fa-icon')
                    console.log('<img src="' + iconPath + '" class="' + otherClass.join(' ') + '" />');

                    el.outerHTML = '<img src="' + iconPath + '" class="' + otherClass.join(' ') + '" />';
                });
            }
        }
    }
});