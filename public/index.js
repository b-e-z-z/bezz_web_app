Vue.use(Vuetify);

var vm = new Vue({
    el: "#app",
    comments: true,
    data: function () {
      return {
            footerLoaded: false,
            links: [
                {
                    label: 'twitter',
                    link: 'https://twitter.com/b_e_z_z',
                    img: './static/Twitter.png'
                },
                {
                    label: 'itch.io',
                    link: 'https://bezz.itch.io',
                    img: './static/ItchIO.png'
                },
                {
                    label: 'twitch',
                    link: 'https://twitch.tv/b_e_z_z',
                    img: './static/Twitch.png'
                },
                {
                  label: 'artstation',
                  link: 'https://www.artstation.com/bezz',
                  img: './static/Artstation.png'
                },
                {
                  label: 'instagram',
                  link: 'https://www.instagram.com/b.e.z.z/',
                  img: './static/Instagram.png'
                }             
                //{
                //  label: 'youtube',
                //  link: 'https://www.youtube.com/channel/UCEYnT8cCd5gz_IO8coSBbmw',
                //  img: './static/YouTube.png'
                //}
            ]
        };
    },
    methods: {
        navigateToLink: function (link, e) {
            var win = window.open(link.link, '_blank');
            win.focus();
            e.preventDefault();
        },
        isCentered(l) {
            if (l == this.links.length - 1 && l % 2 == 0) {
                return true
            }
            return false
        }
    }
});