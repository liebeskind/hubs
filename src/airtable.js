import Airtable from 'airtable';
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyOHSVeLr3ryLrL5'
});

const base = Airtable.base('appIR0AlHDFG5WR8z');

export const airtableAssetsInitialState = { DarkLogo: null, Name: null, Icon: null }
export const airtableAssets = base('Assets');

export const airtableMessages = base('Messages').select({
    view: 'Grid view'
}).firstPage(async (err, records) => {
    if (err) { console.error(err); return; }
    const record = records[0];
    // console.log(record.get('Motto'))
    return record;

    // records.forEach(function(record) {
    //     console.log('Retrieved', record.get('Motto'));
    // });
});;
// .find('recHqITRS7cBMwn9i', (err, record) => record.fields);
// export const airtableAssets = () => base('Assets')

// export default base;