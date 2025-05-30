const core=require('@actions/core');
const github=require('@actions/github');
const exec=require('@actions/exec');


function run(){
    // Get some inputs from the action
    const bucket=core.getInput('bucket',{required:true});
    const bucketRegion=core.getInput('bucket-region',{required:true});
    const distFolder=core.getInput('dist-folder',{required:true});
    //github.context.log(`Deploying to bucket: ${bucket} in region: ${bucketRegion} from folder: ${distFolder}`);
   
    // upload files to S3
    const s3Uri=`s3://${bucket}`
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

    const websiteUrl=`http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
    core.setOutput('website-url',websiteUrl);
}

run();