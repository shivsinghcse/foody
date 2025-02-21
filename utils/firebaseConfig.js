import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: 'AIzaSyBDJ775ndhD9bAMfc-hRoiQ4VcdhmN8j5E',
    authDomain: 'foody-acf96.firebaseapp.com',
    projectId: 'foody-acf96',
    storageBucket: 'foody-acf96.firebasestorage.app',
    messagingSenderId: '716643670194',
    appId: '1:716643670194:web:9c85211965cb120b1591ab',
    measurementId: 'G-GEF6YP8YNW',
};

const firebaseAppConfig = initializeApp(firebaseConfig);

export default firebaseAppConfig;
