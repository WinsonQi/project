import layout from '@/components/layout'
//import home from '@/components/Home'
import one from '@/components/one'
import two from '@/components/two'
import three from '@/components/three'
import four from '@/components/four'
import five from '@/components/five'
import six from '@/components/six'

export default [
   {
     //path: '',
     //component: layout,
     //children: [{
       //path: '/',
       //component: home,
       //name: 'home',
       //meta: {
         //title: 'Home',
         //icon: 'ios-home'
       //}
     //}]
   //},
  //{

  //   path: 'index',
  //   component: layout,
  //   children: [{
  //     path: '/home',
  //     component: home,
  //     name: 'home',
  //     meta: {
  //       title: '登录',
  //       icon: 'edit'
  //     }
  //   }]
  // },

    path: '',
    component: layout,
    meta: {
      title: 'Merchandising',
      icon: 'edit'
    },
    children: [{
      path: 'one',
      component: one,
      name: 'one',
      meta: {
        title: '菜单1',
        //icon: 'edit'
      },
    }, {
      path: 'one',
      component: one,
      name: 'one',
      meta: {
        title: '菜单2',
        //icon: 'edit'
      },
    }]
  },

 {
  path: '',
    component: layout,
    meta: {
      title: 'Customer Data',
      icon: 'location'
    },
    children: [{
        path: 'one',
        component: one,
        name: 'one',
        meta: {
          title: 'Tech Pack',
          //icon: 'edit'
        },
        item: 0,
      },{
        path: 'one',
        component: one,
        name: 'one',
        meta: {
          title: 'Dev BOM',
          //icon: 'edit'
        },
      }, {
      path: 'two',
      component: two,
      name: 'two',
      meta: {
        title: 'Bulk Order',
        //icon: 'edit'
      },
    }, {
      path: 'five',
      component: five,
      name: 'five',
      meta: {
        title: 'Bulk BOM',
        //icon: 'edit'
      },
    }, {
      path: 'five',
      component: five,
      name: 'five',
      meta: {
        title: 'Contract',
        //icon: 'edit'
      },
    }]
  },

  {
    path: 'index',
    component: layout,
    children: [{
      path: '/three',
      component: four,
      name: 'three',
      meta: {
        title: 'Development',
        icon: 'menu'
      }
    }]
  },

  {
    path: 'index',
    component: layout,
    children: [{
      path: '/four',
      component: six,
      name: 'four',
      meta: {
        title: 'Bulk',
        icon: 'deliver'
      }
    }]
  },
  {
  path: '',
    component: layout,
    meta: {
      title: 'Mater Center',
      icon: 'edit'
    },
    children: [{
      path: 'one',
      component: one,
      name: 'one',
      meta: {
        title: 'Fabric',
        //icon: 'edit'
      },
    },{ 
      path: 'one',
      component: one,
      name: 'one',
      meta: {
      title: 'Color',
    },
    },{ 
      path: 'one',
      component: one,
      name: 'one',
      meta: {
      title: 'Quantity',
    },
    },{
      path: 'one',
      component: one,
      name: 'one',
      meta: {
      title: 'Destination',
        //icon: 'edit'
      },
    },{
      path: 'one',
      component: one,
      name: 'one',
      meta: {
      title: 'Sample Request',
        //icon: 'edit'
      },
    },{
      path: 'one',
      component: one,
      name: 'one',
      meta: {
      title: 'Customer Manuel',
        //icon: 'edit'
      },
    }]
  },

]
