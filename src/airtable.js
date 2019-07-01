import Airtable from 'airtable';
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyOHSVeLr3ryLrL5'
});

const base = Airtable.base('appIR0AlHDFG5WR8z');

export const airtableAssetsInitialState = { DarkLogo: null, Name: null }
export const airtableAssets = base('Assets');
// .find('recHqITRS7cBMwn9i', (err, record) => record.fields);
// export const airtableAssets = () => base('Assets')

// export default base;