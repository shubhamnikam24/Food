import { Amplify } from 'aws-amplify';

const awsconfig = {
  Auth: {
    region: 'ap-south-1',
    userPoolId: 'ap-south-1_GDmkfyZg8',
    userPoolWebClientId: '1jbh7idd6n9j3uqcpgv3qkpbqp',
    mandatorySignIn: false, // optional, depending on app logic
  },
};

Amplify.configure(awsconfig);

export default awsconfig;
