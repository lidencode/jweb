jWeb.extend('wpo', {
    fontAwesome: {
        improve: function(path) {
            var folders = ['brands', 'duotone', 'light', 'regular', 'sharp-light', 'sharp-regular',
                'sharp-solid', 'sharp-thin', 'solid', 'thin'];

            var styles = [];

            for (var i = 0; i < folders.length; i++) {
                var folder = folders[i];

                // TODO: add css class for fa-icon and replace image for before in the original el, same as fa do it.
                document.querySelectorAll('.fa-' + folder).forEach((el, i) => {
                    var otherClass = Array.from(el.classList)
                        .filter(item => item !== 'fa-' + folder);

                    var faClass = otherClass.find(cls => cls.startsWith('fa-'));

                    var icon = faClass.replace('fa-', '') + '.svg';
                    var iconPath = path + '/' + folder + '/' + icon;

                    var customClass = 'wpo-' + faClass;
                    styles.push('.' + customClass + '::after { content: ""; background: url:("' + iconPath + '") no-repeat; } ')
                    el.classList.add(customClass);
                    el.classList.remove(faClass);
                });
            }

            const style = document.createElement('style');
            style.innerHTML = styles.join(' ');
            document.head.appendChild(style);
        }
    }
});