import DS from 'ember-data';
// import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:8081/api'
});
