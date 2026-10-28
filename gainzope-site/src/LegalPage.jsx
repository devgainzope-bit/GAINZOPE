import React, { useEffect } from 'react';
import './legal-page.css';

const supportEmail = 'support.gainzope@gmail.com';

const pages = {
  '/privacy': {
    title: 'GAINZOPE Privacy Policy',
    description: 'Learn how GAINZOPE handles information for its rewards and recharge-discount services.',
    kicker: 'GAINZOPE / PRIVACY POLICY',
    heading: 'Privacy Policy',
    lead: 'This policy explains how GAINZOPE may handle information when you use our website, Android app, rewards features and eligible recharge-related services.',
    sections: [
      ['Information we may collect', 'Depending on the feature you use, GAINZOPE may collect information you provide or that is needed to operate the service. This can include account details, mobile-number or authentication information, contact email where you choose to provide it, device and app information, and usage or activity information.'],
      ['Rewards and activity information', 'We may keep records of points, tokens, referral activity, spin participation, surveys, tasks, offers, reward status and related verification information. This helps us credit eligible activity, show wallet status, investigate issues and protect the programme from misuse.'],
      ['Recharge and payment-related information', 'When an eligible recharge or payment-related feature is used, we may receive information needed to process, confirm, support or reconcile that transaction, such as the recharge request, status, amount, payment reference and provider response. Payment credentials are handled by the applicable payment provider; GAINZOPE does not state that it stores card or bank credentials unless a feature clearly says so.'],
      ['How we use information', 'We use information to provide and improve the service; authenticate accounts; operate rewards, surveys, offers, referrals and eligible redemptions; send requested or service-related notifications; respond to support requests; prevent fraud, abuse and duplicate accounts; and meet applicable legal or operational requirements.'],
      ['Service providers and third parties', 'Some features may involve service providers or activity providers, such as survey, offer, payment, recharge, authentication, notification or hosting providers. We share only the information reasonably needed for the relevant feature, subject to their applicable terms and privacy practices. The information shown in the app at the time of an activity or transaction may identify additional feature-specific handling.'],
      ['Security and retention', 'We use reasonable administrative, technical and organisational measures to protect information. No online service can guarantee absolute security. We retain information only for as long as reasonably needed for the purposes in this policy, to resolve disputes, prevent fraud, complete transactions or meet legal and operational obligations.'],
      ['Your choices and account deletion', 'You may choose not to provide optional information, manage device notifications through your device settings, and delete your account directly in the GAINZOPE Android app under Profile / Settings > Account Security > Delete Account, or submit a request on our Account Deletion page or via email at ' + supportEmail + '. Some information may need to be retained where necessary for transaction records, fraud prevention, disputes or legal obligations.'],
      ['Children', 'GAINZOPE is intended only for people who are legally eligible to use the relevant service. Do not create an account or provide personal information if you are not eligible under applicable law or the app’s stated requirements.'],
      ['Policy updates and contact', 'We may update this policy as our features change. The current version will be posted here with its effective date. For privacy questions or requests, email ' + supportEmail + '.']
    ]
  },
  '/terms': {
    title: 'GAINZOPE Terms & Conditions',
    description: 'Read the terms that apply to GAINZOPE rewards, tokens and eligible recharge-related services.',
    kicker: 'GAINZOPE / TERMS & CONDITIONS',
    heading: 'Terms & Conditions',
    lead: 'These terms govern use of GAINZOPE’s website, Android app, rewards programme and eligible recharge-related services.',
    sections: [
      ['Acceptance and eligibility', 'By using GAINZOPE, you agree to these terms and the Privacy Policy. You must be eligible to use the service under applicable law and any requirements displayed in the app. GAINZOPE may limit features by location, account status or feature availability.'],
      ['Account responsibility and accurate information', 'You are responsible for information provided for your account, keeping access credentials secure and using only your own account. Provide accurate information and promptly correct material inaccuracies. Do not create or control accounts for another person except where a feature expressly permits it.'],
      ['Points, tokens and eligible value', 'Points are programme units awarded for eligible, verified activity. The current published rule is 100 Points = 1 GAINZOPE Token and 1 GAINZOPE Token = ₹1 of eligible value. Tokens are rewards-programme units, not money, deposits, investments, securities or cryptocurrency. They have value only in eligible options made available by GAINZOPE and are not guaranteed to be redeemable at all times.'],
      ['Activities, surveys, tasks and rewarded advertisements', 'Activities may include surveys, tasks, offers and rewarded advertisements where shown in the app. Follow the displayed instructions and any provider terms. An activity is eligible only after its stated requirements are met and the result is confirmed. A provider may disqualify, reject, delay or reverse an activity under its applicable rules.'],
      ['Referrals and spin fair play', 'Referral rewards, milestones and daily limits are governed by the Reward Terms. Spin participation is governed by the Spin & Fair-Play Rules. Free reward features are promotional rewards features; they are not gambling, betting or a paid chance-based service.'],
      ['Recharge services, payments and refunds', 'Eligible recharge services are subject to the information shown before a transaction is confirmed and to the applicable payment or recharge provider process. Payment processing may be handled by a provider. Refunds and cancellations, where applicable, are governed by the Refund & Cancellation Policy and the transaction status; a successful payment does not by itself guarantee that every transaction can be cancelled or refunded.'],
      ['Fraud, abuse and invalid rewards', 'Do not use duplicate or fake accounts, false information, bots, automation, emulators, manipulation, unauthorised scripts or other activity that interferes with the service or a provider. We may investigate suspected abuse, withhold, reverse or adjust invalid rewards, and suspend or terminate access where reasonably necessary to protect users and the programme.'],
      ['Third-party services and availability', 'Third-party providers operate their own services and policies. GAINZOPE is not responsible for their independent content, availability or decisions. Features, activities, rewards, providers and availability may change, pause or end. We do not guarantee uninterrupted service or the availability of a particular activity, reward, token use or recharge option.'],
      ['Changes, intellectual property and privacy', 'We may update features, rules or these terms. Material changes will be posted here or communicated through appropriate service channels. GAINZOPE names, branding, content and software are protected by applicable intellectual-property rights. Our handling of information is described in the Privacy Policy.'],
      ['Support and legal terms', 'For support, contact ' + supportEmail + '. To the extent permitted by applicable law, GAINZOPE is not liable for indirect, incidental or consequential loss arising from use of the service. Nothing in these terms limits rights that cannot legally be limited. These terms do not state a governing-law or jurisdiction clause because no verified business jurisdiction information is published on this site.']
    ]
  },
  '/reward-terms': {
    title: 'GAINZOPE Reward Terms',
    description: 'Read GAINZOPE reward, points, token and referral rules.',
    kicker: 'GAINZOPE / REWARD TERMS',
    heading: 'Reward terms & value rules',
    lead: 'These rules explain the current GAINZOPE rewards programme and how eligible points and tokens may be used.',
    alert: 'Current value rule: 100 Points = 1 GAINZOPE Token. 1 GAINZOPE Token = ₹1 of eligible value. Eligibility, limits and available uses are shown in the app when you redeem.',
    sections: [
      ['Earning points', 'Eligible earning opportunities may include daily spin, surveys, tasks, offers, rewarded advertisements and referrals when shown in the app. Points are credited only after the displayed requirements are met and the result is verified. An activity can remain pending, be reviewed, be rejected or be reversed when its requirements are not met.'],
      ['Using tokens', 'Tokens may be used only for eligible rewards or recharge-related value that is available in the app. Catalogue availability, redemption limits, transaction status and feature requirements can change. Points and tokens are not cash, investments or a promise of universal redemption.'],
      ['Referral rewards', 'When a referred user completes their first valid task or activity, the referrer receives 500 points and the referred user receives 200 points. Milestone bonuses are 1,500 points at 10 successful referrals, 5,000 points at 25 successful referrals and 15,000 points at 50 successful referrals. A maximum of 10 successful referrals can count each day.'],
      ['Reviews and changes', 'GAINZOPE may review, limit, withhold or reverse rewards connected to invalid, duplicate, deceptive or abusive activity. Activities, offers, gift cards, token uses and eligibility may change. The live information shown with an activity or redemption controls the current experience.'],
      ['Support', 'For questions about points, tokens, activities, referrals or redemption status, email ' + supportEmail + '.']
    ]
  },
  '/spin-rules': {
    title: 'GAINZOPE Spin & Fair-Play Rules',
    description: 'Read GAINZOPE daily spin participation and fair-play rules.',
    kicker: 'GAINZOPE / FAIR-PLAY RULES',
    heading: 'Spin & fair-play rules',
    lead: 'The GAINZOPE spin is a free promotional rewards feature. It is not gambling, casino play or betting.',
    alert: 'The app shows the active participation conditions and reward information before a user starts. GAINZOPE does not publish a universal public odds table because reward configuration can be feature-specific.',
    sections: [
      ['Eligibility and availability', 'Only eligible, verified accounts may participate when spin is displayed as available. Each eligible account may receive one daily spin, with the daily reset based on Indian Standard Time (IST). Availability can be limited by account status, feature rules or programme availability.'],
      ['Bonus spins and Mystery Box rewards', 'Valid tasks, activity milestones or other displayed programme conditions may unlock bonus spins. Where the spin experience includes a Mystery Box, the app will show the applicable reward information before participation.'],
      ['Reward selection and crediting', 'The app controls the active reward-selection experience and confirms the result. A reward is credited only after the app or relevant provider confirms it. GAINZOPE does not promise a particular reward, a particular outcome or immediate crediting for every participation.'],
      ['Fair play and review', 'Do not use duplicate accounts, automation, bots, scripts, manipulation or other invalid methods. GAINZOPE may review participation, withhold or reverse invalid rewards, and restrict access where needed to protect the programme.'],
      ['Support', 'For a spin or fair-play question, email ' + supportEmail + '.']
    ]
  },
  '/refund-cancellation': {
    title: 'GAINZOPE Refund & Cancellation Policy',
    description: 'Learn how GAINZOPE handles eligible recharge payment, cancellation and refund issues.',
    kicker: 'GAINZOPE / REFUND & CANCELLATION',
    heading: 'Refund & Cancellation Policy',
    lead: 'This policy distinguishes recharge and payment transactions from GAINZOPE rewards, points and tokens.',
    sections: [
      ['Recharge or payment transaction', 'Before a recharge is initiated, review the mobile number, operator, plan or service details, amount and any displayed token or discount application. After a transaction has been submitted to a payment or recharge provider, cancellation may no longer be possible.'],
      ['Successful payment and successful recharge', 'A payment marked successful and a recharge marked successful are generally treated as completed. Check the transaction status shown by the applicable service before contacting support.'],
      ['Successful payment but recharge unsuccessful', 'If payment is successful but the recharge is not confirmed as successful, the transaction may remain pending while the applicable payment or recharge provider processes its status. Refunds, where applicable, are processed according to the applicable transaction status and payment/recharge provider process.'],
      ['Failed or duplicate payments', 'If payment fails, do not assume money was collected; check the provider and transaction status first. If more than one payment appears to have been made for the same request, contact support with the relevant transaction details so the case can be reviewed. Duplicate payment does not automatically establish refund eligibility.'],
      ['Refund eligibility and destination', 'We review refund requests according to the transaction status, provider process and applicable requirements. Not every transaction can be refunded, including completed recharges where cancellation is unavailable. When a refund is approved and processed, it is handled through the applicable payment process and normally returns through the original transaction route where supported. We do not promise instant or fixed refund timelines.'],
      ['Rewards, points and tokens', 'Points and tokens are programme rewards, not cash balances. They are not refundable or exchangeable for cash merely because an activity, redemption option or transaction changes. Invalid or reversed activity, failed redemption processing, cancellation or fraud review may require an adjustment or reversal of related points, tokens or discounts.'],
      ['How to get help', 'Email ' + supportEmail + ' with the account identifier, mobile number used for the request, transaction or order reference if available, the issue and relevant screenshots. Do not send sensitive payment credentials by email.']
    ]
  },
  '/support': {
    title: 'GAINZOPE Support',
    description: 'Contact GAINZOPE support for account, rewards, recharge, payment, privacy and account-deletion help.',
    kicker: 'GAINZOPE / SUPPORT',
    heading: 'How can we help?',
    lead: 'Contact GAINZOPE support for help with your account, activities, rewards and eligible recharge-related services.',
    sections: [
      ['Contact support', 'Email ' + supportEmail + '. Include a clear description of the issue, the account email or mobile number used for the service where relevant, and a transaction or activity reference if available. Do not send OTPs, passwords, card details or other sensitive credentials.'],
      ['What we can help with', 'You can contact us about account access, points, tokens, surveys, tasks, offers, referrals, spin participation, recharge status, payment issues, refunds, privacy or data requests, and account deletion.'],
      ['A simple support flow', 'First, check the status shown in the app or transaction flow. Then email support with the relevant details and screenshots where useful. We will review the information available to us and may request additional non-sensitive details needed to investigate.'],
      ['Account deletion', 'You can delete your account directly inside the GAINZOPE app under Profile / Settings > Account Security > Delete Account, or see the Account Deletion page or email ' + supportEmail + ' for assistance.']
    ]
  },
  '/account-deletion': {
    title: 'GAINZOPE Account Deletion',
    description: 'Delete your GAINZOPE account directly in the Android app or submit a deletion request.',
    kicker: 'GAINZOPE / ACCOUNT DELETION',
    heading: 'Request account deletion',
    lead: 'You have full control over your account. You can delete your GAINZOPE account directly inside the Android app at any time, or submit a request if you have uninstalled the app.',
    alert: 'App Feature Available: GAINZOPE includes a direct account deletion option inside the Android app (Profile/Settings → Account Security → Delete Account). You do not need to wait for email processing if you have the app installed on your phone.'
  }
};

function mailLink(text = supportEmail) {
  return <a href={`mailto:${supportEmail}`}>{text}</a>;
}

function AccountDeletionContent({ onNavigate }) {
  return (
    <div className="legalContent accountDeletionContent">
      <section>
        <h2>1. Delete directly inside the GAINZOPE app (Recommended)</h2>
        <p>
          The fastest way to delete your account is directly within the GAINZOPE Android app. This self-serve option directly initiates your account deletion without waiting for email review.
        </p>
        <p>
          <strong>Verified in-app navigation path:</strong>
        </p>
        <ol className="legalStepsList">
          <li className="legalStepItem">
            <span className="legalStepNum">1</span>
            <span>Open the <strong>GAINZOPE</strong> app on your Android phone.</span>
          </li>
          <li className="legalStepItem">
            <span className="legalStepNum">2</span>
            <span>Navigate to <strong>Profile/Settings</strong>.</span>
          </li>
          <li className="legalStepItem">
            <span className="legalStepNum">3</span>
            <span>Select <strong>Account Security</strong>.</span>
          </li>
          <li className="legalStepItem">
            <span className="legalStepNum">4</span>
            <span>Tap <strong>Delete Account</strong>.</span>
          </li>
          <li className="legalStepItem">
            <span className="legalStepNum">5</span>
            <span>Read the on-screen confirmation details and tap to confirm your deletion.</span>
          </li>
        </ol>
      </section>

      <section>
        <h2>2. Delete via email request (Alternative)</h2>
        <p>
          If you have uninstalled the GAINZOPE app, lost access to your Android device, or are unable to delete your account through the app interface, you can submit an account deletion request to our support team.
        </p>
        <div className="legalActionBox">
          <div>
            <h3 className="legalActionTitle">Submit Deletion Request by Email</h3>
            <p className="legalActionDesc">Click below to open your email client with the prefilled subject line:</p>
          </div>
          <a
            className="accountDeletionMailtoBtn"
            href={`mailto:${supportEmail}?subject=Account%20Deletion%20Request`}
            aria-label="Request Account Deletion via email to support.gainzope@gmail.com"
          >
            <span>Request Account Deletion</span>
            <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h12c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="18,6 10,12 2,6" />
            </svg>
          </a>
          <p className="legalNoticeText">
            <strong>Important note:</strong> Sending an email submits a request to our support team for review; it does not automatically delete your account immediately. To prevent unauthorized requests, our team verifies account ownership (via your registered Indian mobile number or email) before deleting account records.
          </p>
          <p className="legalNoticeHint">
            Please include your <strong>registered mobile number</strong> in the email so our team can locate and verify your account.
          </p>
        </div>
      </section>

      <section>
        <h2>3. What is deleted</h2>
        <p>
          Once your account deletion is processed and confirmed (either via the in-app option or after ownership verification by our support team), the following data is removed from our active production systems:
        </p>
        <ul className="legalBulletList">
          <li><strong>Authentication credentials &amp; profile:</strong> Your user profile details, login tokens, and contact identifiers.</li>
          <li><strong>Registered mobile number:</strong> Your phone number is unlinked from active account records.</li>
          <li><strong>Rewards balance &amp; ledger:</strong> All accumulated points, unredeemed token balances, referral history, and loyalty tier levels.</li>
          <li><strong>App session tokens:</strong> Device tokens and active session credentials associated with your account.</li>
        </ul>
      </section>

      <section>
        <h2>4. Information we may retain</h2>
        <p>
          In accordance with applicable law and our Privacy Policy, certain limited data may be retained even after your account is deleted:
        </p>
        <ul className="legalBulletList">
          <li><strong>Recharge &amp; payment transaction records:</strong> Completed mobile recharge transactions, provider reference numbers, and payment reconciliation records required for statutory accounting, tax, or legal compliance.</li>
          <li><strong>Fraud prevention &amp; platform security:</strong> Non-personal audit logs strictly necessary to investigate abuse, prevent repeated fraud, or enforce our fair-play rules.</li>
          <li><strong>Dispute resolution:</strong> Records necessary to resolve ongoing customer support disputes or fulfill legal obligations.</li>
        </ul>
        <p>
          For complete information on how GAINZOPE collects, protects, and retains information, please review the{' '}
          <a
            href="/privacy"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/privacy');
              }
            }}
          >
            GAINZOPE Privacy Policy
          </a>.
        </p>
      </section>

      <section>
        <h2>5. Before you delete</h2>
        <p>
          Please review these important considerations before proceeding with account deletion:
        </p>
        <ul className="legalBulletList">
          <li><strong>Points and tokens are forfeited:</strong> All unredeemed points and token balances are permanently forfeited upon account deletion. Tokens cannot be refunded or converted to cash.</li>
          <li><strong>Pending recharge requests:</strong> Ensure any recent telecom recharge transactions or discount requests have completed before deleting your account.</li>
          <li><strong>Permanent and irreversible:</strong> Account deletion cannot be undone. Once deleted, your account cannot be restored and previous progress cannot be recovered.</li>
        </ul>
      </section>

      <section>
        <h2>6. Need assistance?</h2>
        <p>
          If you experience any issues deleting your account through the app or have privacy questions, email{' '}
          <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
        </p>
      </section>
    </div>
  );
}

export default function LegalPage({ path, onNavigate }) {
  const page = pages[path];

  useEffect(() => {
    if (!page) return undefined;
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const old = {
      description: description?.content,
      canonical: canonical?.href,
      ogTitle: ogTitle?.content,
      ogDescription: ogDescription?.content,
      ogUrl: ogUrl?.content
    };
    const url = `https://gainzope.in${path}`;
    document.title = page.title;
    if (description) description.content = page.description;
    if (canonical) canonical.href = url;
    if (ogTitle) ogTitle.content = page.title;
    if (ogDescription) ogDescription.content = page.description;
    if (ogUrl) ogUrl.content = url;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => {
      document.title = previousTitle;
      if (description && old.description) description.content = old.description;
      if (canonical && old.canonical) canonical.href = old.canonical;
      if (ogTitle && old.ogTitle) ogTitle.content = old.ogTitle;
      if (ogDescription && old.ogDescription) ogDescription.content = old.ogDescription;
      if (ogUrl && old.ogUrl) ogUrl.content = old.ogUrl;
    };
  }, [page, path]);

  if (!page) return null;
  return (
    <main className="legalPage" id="main-content">
      <div className="legalShell legalMain">
        <p className="legalKicker">{page.kicker}</p>
        <h1>{page.heading}</h1>
        <p className="legalLead">{page.lead}</p>
        {page.alert && <aside className="legalAlert">{page.alert}</aside>}
        {path === '/account-deletion' ? (
          <AccountDeletionContent onNavigate={onNavigate} />
        ) : (
          <div className="legalContent">
            {page.sections.map(([title, text]) => (
              <section key={title}>
                <h2>{title}</h2>
                <p>{text.split(supportEmail).map((part, index, all) => <React.Fragment key={`${title}-${index}`}>{part}{index < all.length - 1 && mailLink()}</React.Fragment>)}</p>
              </section>
            ))}
          </div>
        )}
        <p className="legalEffective">Effective date: 3 October 2026</p>
      </div>
    </main>
  );
}

export { pages };
