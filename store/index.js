import Vuex from 'vuex'
import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
      firstTime: true,
      logoEnded: false,
      showMenu: false,
      inputError: true,
      menuView: 'mpMenuIndex',
      greetings: [
        {id: 1, text: 'Páginas web'},
        {id: 2, text: 'Responsive'},
        {id: 3, text: 'Frontend'},
        {id: 4, text: 'Backend'},
        {id: 5, text: 'Base de datos'},
        {id: 6, text: 'SQL & NoSQL'},
        {id: 7, text: 'Apps móviles'},
        {id: 8, text: 'Javascript'}
      ],
      indexItemsMenu: [
        {item: 1, name: 'Conóceme', link: '/about'},
        {item: 2, name: 'Mírame', link: '/projects'},
        // {item: 3, name: 'Leéme', link: '/blogs'}, por ahora sin blogs
        {item: 4, name: 'Escríbeme', link: '/contact'}
      ],
      projects: [
        {
          item: 1,
          name: 'Growl',
          description: 'Tutorial sobre CSS Grid Layout',
          image: 'https://s3.us-east-2.amazonaws.com/images.luisagapito.com/image-projects/Growl.svg',
          tags: ['Vue', 'CSS Grid', 'Webpack'],
          link: 'https://projects.luisagapito.com/Growl'
        },
        {
          item: 2,
          name: 'High TechSchool',
          description: 'Escuela secundaria',
          image: 'https://hightechschool.luisagapito.com/images/slide2.jpg',
          tags: ['Jquery', 'Bootstrap', 'ParticleJS'],
          link: 'https://hightechschool.luisagapito.com'
        },
        {
          item: 3,
          name: 'Peru Travel',
          description: 'Página de  turismo',
          image: 'https://perutravel.luisagapito.com/images/split1.jpg',
          tags: ['Javascript', 'Materialize'],
          link: 'https://perutravel.luisagapito.com'
        },
        {
          item: 4,
          name: 'Clock',
          description: 'Blog de viajes en el tiempo',
          image: 'https://raw.githubusercontent.com/agapo91/Clock/master/public/images/cover.jpg',
          tags: ['PHP', 'MySQL', 'Bootstrap'],
          link: 'https://github.com/agapo91/Clock'
        }
      ],
      skills: [
        {item: 1, name: 'HTML/CSS', percent: '100'},
        {item: 2, name: 'SASS/LESS', percent: '95'},
        {item: 3, name: 'JAVASCRIPT', percent: '85'},
        {item: 4, name: 'JQUERY', percent: '85'},
        {item: 5, name: 'BOOTSRAP', percent: '100'},
        {item: 6, name: 'VUE/VUEX', percent: '95'},
        {item: 7, name: 'REACT.JS', percent: '50'},
        {item: 8, name: 'PHP', percent: '85'},
        {item: 9, name: 'JAVA', percent: '80'},
        {item: 10, name: 'ANDROID', percent: '75'},
        {item: 11, name: 'WORDPRESS', percent: '70'},
        {item: 12, name: 'SQL', percent: '85'}
      ],
      socials: [
        {item: 1, name: 'facebook', link: 'https://www.facebook.com/lagapog/'},
        {item: 5, name: 'twitter', link: 'https://twitter.com/lagapog/'},
        {item: 2, name: 'instagram', link: 'https://www.instagram.com/lagapog/'},
        {item: 3, name: 'linkedin', link: 'https://www.linkedin.com/in/luisagapito/'},
        {item: 4, name: 'github', link: 'https://github.com/lagapog/'}        
      ],
      homeItemButton: {name: 'home', link: '/'}
    },
    mutations
  })
}

export default createStore
