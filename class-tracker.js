const request = require('request');

const loginUrl = 'https://www.beartracks.ualberta.ca/';
const availabilityUrl = 'https://www.beartracks.ualberta.ca/psc/uahebprd_6/EMPLOYEE/HRMS/c/SSR_STUDENT_FL.SSR_MD_SP_FL.GBL?Action=U&MD=Y&GMenu=SSR_STUDENT_FL&GComp=SSR_START_PAGE_FL&GPage=SSR_START_PAGE_FL&scname=CS_SSR_MANAGE_CLASSES_NAV&Page=SSR_CS_WRAP_FL&Action=U&ACAD_CAREER=UGRD&CRSE_ID=006676&CRSE_OFFER_NBR=1&INSTITUTION=UOFAB&STRM=1820&CLASS_NBR=41752&pts_Portal=EMPLOYEE&pts_PortalHostNode=HRMS&pts_Market=GBL&cmd=uninav';

const loginOptions = {
  method: 'POST',
  url: loginUrl,
  form: {
    username: 'your-username',
    password: 'your-password'
  }
};

request(loginOptions, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  // If the login was successful, make a request to the class availability page
  request(availabilityUrl, (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }

    // Parse the response to check if a spot is available
    if (isSpotAvailable(body)) {
      sendAlert();
    }
  });
});
