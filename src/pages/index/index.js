import users from '~/data/users.js';

export default {
  data() {
    return {
      users,
    };  
  },

  methods: {
    showToast(e) {
      console.log(e);
      mini.toast.show(getApp().globalData, 2000);
    }
  }
};