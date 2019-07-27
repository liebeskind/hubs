import Airtable from 'airtable';
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyOHSVeLr3ryLrL5'
});
const base = Airtable.base('appIR0AlHDFG5WR8z');

export const airtableAssetsInitialState = { DarkLogo: null, Name: null, Icon: null }

const airtableAssets = base('Assets');
// export const getAirtableAssets = () => airtableAssets.find('recHqITRS7cBMwn9i');
export const getAirtableAssets = async () => {
    const result = await airtableAssets.select({
        view: 'Grid view'
    }).firstPage()
    
    return result[0].fields
}

export const airtableMessages = base('Messages').select({
    view: 'Grid view'
}).firstPage(async (err, records) => {
    if (err) { console.error(err); return; }
    const record = records[0];
    console.log(record)
    return record;
});;