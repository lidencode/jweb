jWeb.extend('wpo', {
    fontAwesome: {
        improve: function(path) {
            var folders = ['brands', 'duotone', 'light', 'regular', 'sharp-light', 'sharp-regular',
                'sharp-solid', 'sharp-thin', 'solid', 'thin'];

            var styles = [
                '.wpo-fa-icon::before {' +
                ' content: "";' +
                ' display: inline-block;' +
                ' width: 1em;' +
                ' height: 1em;' +
                ' background-color: currentColor;' +
                ' mask-size: contain;' +
                ' vertical-align: middle;' +
                ' margin-top: -0.3em; }'
            ];

            for (var i = 0; i < folders.length; i++) {
                var folder = folders[i];

                document.querySelectorAll('.fa-' + folder).forEach((el, i) => {
                    var otherClass = Array.from(el.classList)
                        .filter(item => item !== 'fa-' + folder);

                    var faClass = otherClass.find(cls => cls.startsWith('fa-'));

                    var icon = faClass.replace('fa-', '') + '.svg';
                    var iconPath = path + '/' + folder + '/' + icon;

                    var customClass = 'wpo-' + faClass;
                    styles.push('.' + customClass + '::before { mask: url("' + iconPath + '") center no-repeat; } ')
                    el.classList.add(customClass);
                    el.classList.add('wpo-fa-icon');
                    el.classList.remove(faClass);
                });
            }

            const style = document.createElement('style');
            style.innerHTML = styles.join(' ');
            document.head.appendChild(style);
        }
    }
});