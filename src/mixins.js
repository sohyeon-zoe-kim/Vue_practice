import axios from 'axios';

export default {
  methods: {
    async $api(url, method, data) {
      let result = (await axios({
        method: method,
        url,
        data
      }).catch(e => {
        console.log(e);
      })).data;
      console.log(result);
      return result;
    },
    test() {
      console.log("test");
    }
  }
}