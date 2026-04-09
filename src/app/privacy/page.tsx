import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Flycomm",
  description: "Flycomm Networks App Privacy Policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <article className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-brand transition-colors mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3">
          Privacy Policy
        </h1>
        <p className="text-text-muted text-sm mb-10">Flycomm Networks App</p>

        <div className="legal-content space-y-6">
          <p>
            Flycomm Networks Ltd. (referenced below as &quot;Flycomm&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot;, as applicable), respects your privacy and is committed to protecting the Personal Information that you share with us. This policy describes the scope of Personal Information collection in respect of using Flycomm&apos;s application and/or services (respectively, the &quot;App&quot; and the &quot;Services&quot;).
          </p>
          <p>
            By using the App and/or Services, you acknowledge that you have reviewed both Our Terms and Conditions and this Privacy Policy and agree to be bound by them. Please be aware that this Privacy Policy does not apply to the practices of any third parties to whom Flycomm may disclose information (as described hereinafter) pursuant to the terms of this Privacy Policy.
          </p>
          <p>
            This Privacy Policy may be occasionally updated. If We make any substantial changes in the manner We collect, process or use your Personal Information, then We will provide a proper notice within this Privacy Policy and/or within the App. The most updated version of this Privacy Policy can be found at{" "}
            <a href="https://mobile.flycomm.co/files/privacy-policy.pdf" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-light underline underline-offset-2">
              https://mobile.flycomm.co/files/privacy-policy.pdf
            </a>.
          </p>

          <h2>1. Data and Personal Information We Collect</h2>
          <p>
            <strong>Personal Information</strong> — Personal Information in this Privacy Policy refers to any information that may be used to identify an individual.
          </p>
          <p>The Personal Information which is collected by the App may include:</p>
          <ul>
            <li><strong>Mobile device ID</strong> — (Apple/Android ID) as well as other identifiers such as SIM card information.</li>
            <li><strong>Location data</strong> — while the App is in use (&quot;location when in use&quot;) and/or when the App is running in the background (&quot;location always&quot;) (in accordance with the permissions and preferences granted by the user on their device).</li>
            <li><strong>Contact Information</strong> (if applicable) — Full name, e-mail and/or physical addresses, phone number, date of birth etc.</li>
          </ul>
          <p>
            Any information provided by you via your use of the App and/or Services or when you interact with Us, including your comments and correspondence with Us, as well as other information when needed to provide you with Our Services.
          </p>

          <h3>Other Information</h3>
          <ul>
            <li>We may also receive and/or collect other types of data and information about you via Our App and/or Services, including information about the apps installed in your device and your usage thereof, time zone, language preference, etc.</li>
            <li>We may also receive and/or collect technical information of your mobile device, including but not limited to information regarding the device model and manufacturer, type and version of operating system, device configuration, Internet Protocol (IP) address, etc.</li>
            <li>We may also receive and/or collect data regarding the communication networks that are detected by your mobile device, such as networks&apos; technical parameters including their quality of service and traffic characteristics. In addition, We may receive and/or collect the performance of the detected networks in respect of different apps you use.</li>
          </ul>
          <p>
            Certain information, as specified above, may continue to be collected through the App, even when it is running in the background, to the extent that you have not properly exited and closed the App. In order to properly exit and close the App, you should choose the relevant option of exiting and closing the App that appears within the App&apos;s menu.
          </p>
          <p>
            For the avoidance of doubt, any non-personal information connected or linked to any Personal Information shall be deemed as Personal Information as long as such connection or linkage exists.
          </p>
          <p>
            Without derogating any of the above, and for the avoidance of doubt, you acknowledge that you are not required under any applicable laws to provide Us with any information, including any Personal Information, and that any information you provide Us, directly or indirectly, is provided at your free will and consent.
          </p>

          <h2>2. Legal Basis for Processing</h2>
          <p>Our collection and processing of Personal Information is based on the following:</p>
          <ul>
            <li>Our need to carry out the above collection and processing of information is for the purpose of providing Our Services in accordance with Our Terms and Conditions and/or for the purpose of customer support and inquiries. To the extent that We use the Personal Information for the purpose of providing Our Services in accordance with Our Terms and Conditions, the basis is your freely given informed consent, as well as Our legitimate business interest.</li>
            <li>To the extent that We use the Personal Information to improve the App or for analysing statistics, the basis for collection of data is Our legitimate interest to conduct such improvements and analysis.</li>
          </ul>

          <h2>3. How Do We Use Your Information</h2>
          <p>
            We may use the information (including Personal Information) and data collected by Us for the purpose they were provided to Us and in connection with the reason for which they were provided, all pursuant to Our Terms and Conditions, including in order to:
          </p>
          <ul>
            <li>Evaluate and measure the performance of communication networks, including their quality of service, reception level and other traffic characteristics, and to offer Flycomm&apos;s clients information and analysis regarding the performance of communication networks, including in respect of the performance of different apps;</li>
            <li>Provide you with access to the App and/or Services, or any functionality thereof, including for purposes of improving the quality of the App by formulating, customizing and enhancing the User&apos;s experience;</li>
            <li>Administrate and improve Our App and Services, or any other product under development, for Our internal records and/or for statistical analysis;</li>
            <li>Provide you with customer service, technical assistance and support, subject to Our sole consideration and internal policies;</li>
            <li>Send you updates, security alerts, support and administrative notices and otherwise facilitate your use of, and Our administration and operation of the App and/or Services;</li>
            <li>Monitor and analyze usage and trends, and to personalize and improve the App and/or Services.</li>
          </ul>

          <h2>4. Information Sharing, Disclosure and Transfer</h2>
          <p>
            Flycomm is committed to protecting your privacy and will not share or disclose information about you, unless otherwise permitted under the following terms and/or circumstances:
          </p>
          <ul>
            <li>When We have your consent to share the information;</li>
            <li>For the purpose of analysis and statistics, provided that such disclosure is done anonymously and is non-personal identifiable;</li>
            <li>In the event of sale or transfer, in whole or in part, of Flycomm or any Flycomm affiliate&apos;s shares or assets, in cases of mergers or in case of negotiations with respect to the foregoing;</li>
            <li>If required to do so by any applicable laws, or in the good-faith belief, that (i) disclosing such information is necessary to comply with any applicable law or respond to any court order, search warrant or equivalent, or where in reasonable belief an action is needed in order to protect Flycomm&apos;s legitimate interests or the personal safety of any individual; and (ii) such disclosure is appropriate or necessary in order to enforce the Terms and Conditions, take precautions against liabilities, investigate and defend against any third party claims or allegations, assist government enforcement agencies, protect the security or integrity of Flycomm&apos;s App and servers and protect its rights and property.</li>
          </ul>
          <p>
            Other than as described above, any other transfer of your Personal Information to third parties will be subject to your consent.
          </p>
          <p>
            For the provision of Our Services, the above purposes and use of the App, information, including Personal Information, may be transferred to recipients in countries around the world (which may be located outside the EU/EEA, European Economic Area) which in some cases may have a lower level of protection than that within the EU/EEA. When transferring Personal Information to countries outside the EU/EEA, to jurisdictions that did not receive an adequacy decision by the European Commission, We use Standard Contractual Clauses approved by the European Commission to ensure a sufficient level of protection for your Personal Information.
          </p>

          <h2>5. Data Retention &amp; Security</h2>
          <ul>
            <li>We may retain all the information We collect for as long as required for the provision of Our Services in accordance with Our Terms and Conditions. We may also retain the information We collect for as long as required to comply with Our legal or business requirements or obligations, to resolve disputes, to enforce Our Terms and Conditions, all as permitted under any applicable laws.</li>
            <li>Without derogating from the above, We store Personal Information if it is necessary to fulfill the purposes for which such information has been collected. This means that We delete Personal Information when such information is no longer necessary. Statistics and analysis which have been anonymised may be saved thereafter.</li>
            <li>All information described above may be stored on Our Cloud Services&apos; servers on datacenters located in the EU/EEA.</li>
            <li>We will take commercially reasonable measures in providing secure transmission of the collected information across the internet to Our servers, and in securing it while at rest, as applicable.</li>
            <li>We rely on the security measures taken by the Cloud Service Provider for the physical security, the integrity, redundancy and the data protection of the data which relates your information.</li>
            <li>However, you should be aware that there is always some risk involved in transmitting information over the internet and that there is also some risk that others could find a way to thwart Our and/or the Cloud Service Provider security systems. As a result, while We strive to protect your information, We cannot ensure or warrant the security and privacy of your Personal Information and/or other information/data collected by the App and/or Services.</li>
          </ul>

          <h2>6. Third Party Platforms</h2>
          <p>
            The App may contain links to platforms operated by other entities. We are not responsible for any of their practices, including privacy practices. Although We choose Our business partners carefully, please be aware that if you choose to use such links, such third party&apos;s own rules and privacy policy will apply and govern your activities and any information you disclose while interacting with them. We encourage you to learn about the privacy policies of any third-party apps and/or websites you visit.
          </p>

          <h2>7. Data Subject Rights</h2>
          <ul>
            <li>You may at any time request the rectification or erasure of your Personal Information. Please note however that deletion could mean that Flycomm cannot process your requests and/or provide you any Services and/or you may not be able to make any use of the App. You have the right to request a copy of your Personal Information from Our records. You have the right to request a limitation of the use of your Personal Information or the termination of use of your Personal Information. If you wish to delete or modify your Personal Information you can do so within the settings of your account, when possible, or you can send Us an e-mail with your request to: <a href="mailto:office@flycomm.co" className="text-brand hover:text-brand-light underline underline-offset-2">office@flycomm.co</a> and We will make reasonable efforts to modify or delete any such Personal Information within a reasonable period of time, and pursuant to any applicable privacy laws. These actions also apply if you wish to modify, cancel or opt-out of your account.</li>
            <li>Note that unless you instruct Us otherwise, We may retain and use your Personal Information after termination of your account, for as long as reasonably required, in accordance with this Privacy Policy, for the purposes of which such Personal Information was collected, including without limitation, for future analytics and analysis, comply with Our legal or business requirements or obligations, to resolve disputes, to enforce Our Terms and Conditions and/or to enable the user to reinstate his/her account, all as permitted under any applicable privacy laws. Notwithstanding the foregoing, Personal Information and User Content may be kept by Us for a period exceeding that if it is required to do so to satisfy any applicable law, regulation, legal process, subpoena or governmental request.</li>
            <li>Aggregate and/or anonymous information derived from your account and/or use of the App and/or Services may remain on Our servers indefinitely.</li>
          </ul>

          <h2>8. Privacy Inquiries</h2>
          <p>
            If you have any questions or queries about this Privacy Policy or regarding the way We collect or process Personal Information, you may contact Us via e-mail at: <a href="mailto:office@flycomm.co" className="text-brand hover:text-brand-light underline underline-offset-2">office@flycomm.co</a>.
          </p>
          <p>
            If you are a resident of the EU/EEA and have a complaint regarding the processing of your Personal Information by Flycomm, you are entitled to report such dissatisfaction to the applicable supervisory authority in your country of residence.
          </p>
        </div>
      </div>
    </article>
  );
}
