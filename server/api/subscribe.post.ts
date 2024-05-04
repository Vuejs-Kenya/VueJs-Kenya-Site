import mailchimp from '@mailchimp/mailchimp_marketing'

const config = useRuntimeConfig()

mailchimp.setConfig({
  apiKey: config.mailchimp_api_key,
  server: config.mailchimp_server_key,
})

export default defineEventHandler(async (event) => {
  const { email } = await readBody(event)

  if (!email)
    throw new Error('Please enter your email address')

  try {
    const res = mailchimp.lists.addListMember(
      config.mailchimp_audience_id,
      {
        email_address: email,
        status: 'subscribed',
      },
    )

    return res
  }
  catch (err) {
    if (err instanceof Error)
      return err
  }
})
