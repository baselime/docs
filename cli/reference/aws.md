---
label: aws
---

# aws

The `aws` command is used to perform operations to integrate with your AWS Account.

---

## create-template

It will create and download the appropriate CloudFormation template to connect your AWS Account and Baselime.

```bash #
baselime aws create-template \
  --account <AWS_ACCOUNT_ID> \
  --region <AWS_REGION> \
  --alias <INTEGRATION_ALIAS>
```

### Options

- `--account`: the account number of the AWS Account to connect
- `--region`: the region to connect
- `--alias`: the alias of the connection. Generally `prod`, `dev` or `staging`

### Outputs

- `ExternalParameter`: an parameter created to secure the integration

Additionally, running this command will download a CloudFormation template in the working directory.

### Example

Command:

```bash #
baselime aws create-template \
  --account 123456789012 \
  --region eu-west-2 \
  --alias prod
```

Output:

```json #
{
  "ExternalParameter": "80facf44-a7fc-444e-8210-9e7de435111d"
}
```



