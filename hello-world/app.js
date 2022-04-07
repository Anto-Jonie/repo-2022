let response;

exports.lambdaHandler = async (event, context) => {
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'helloworld',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
	console.log("response:", response);
    return response
};
