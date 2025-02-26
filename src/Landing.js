import React from 'react';
import DroneButton from './DroneButton';
import VerticalList from './VerticalList';
import VerticalListLink from './VerticalListLink';
import tracking from './img/tracking.webp';
import services from './img/services.webp';
import protection from './img/protection.webp';
import signal from './img/signal.webp';

function Landing() {
  return (
    <div className="Landing">
      <div className='hero-section'>
        <div className='hero-title'>
          Navigate with Confidence in a Connected World.
        </div>
        <div className='hero-text'>In an era of GPS/GNSS challenges and advancing technology, reliability is your greatest asset. Explore expert insights, innovative solutions, and strategic guidance to protect critical systems and adapt to evolving demands. From signal disruptions to complex airspace dynamics, stay ahead with actionable knowledge and trusted expertise.</div>
        <div className='button-holder'>
          <DroneButton onButtonClick={() => { window.location.href = 'https://google.com' }} text={"Explore solutions"}></DroneButton>
        </div>
      </div>
      <div className='other-section'>
        <div className='other-title-holder-right'>
          <div className='other-title-right'>GPS/GNSS Security: Protecting the Foundation of Modern Infrastructure</div>
        </div>
        <div className='text-right other-text-right'>Ensuring Reliability in an Interconnected World</div>
        <div className='other-title-holder-left'>
          <div className='other-title-left'>The Challenge</div>
        </div>
        <div className='other-text-left'>GPS/GNSS signals face growing risks—from accidental interference to intentional jamming and spoofing. The consequences? Compromised logistics, operational delays, and risks to safety-critical systems. Modern infrastructure relies on precise navigation, yet signal interference is increasingly common across industries. Our mission is to provide cutting-edge solutions, incident analysis, and expert guidance to help organizations maintain uninterrupted operations and adapt to technical challenges.</div>
        <div className='other-title-holder-right'>
          <div className='other-title-right'>Solutions for Signal Integrity</div>
        </div>
        <div className='other-text-right'>We deliver global insights and practical strategies to address GPS/GNSS vulnerabilities:</div>
        <div className='other-title-holder-right'>
        <VerticalList
          textArr={['Monitor disruptions impacting aviation, transport, and critical infrastructure.', 'Custom strategies to strengthen system reliability.', 'Robust hardware and encryption to safeguard navigation systems.', 'AI-powered algorithms to detect and filter anomalies.']}
          srcArr={[tracking, services, protection, signal]}
          titleArr={['Incident Tracking', 'Consultancy Services', 'Signal Protection', 'Signal Verification']}
          ></VerticalList> </div>
        <div className='other-title-holder-left'>
          <div className='other-title-left'>Building Resilient Navigation Systems</div>
        </div>
        <div className='other-title-holder-left'>
          <VerticalListLink
            textArr={['Explore global incidents affecting aviation, maritime, and ground systems.', 'Learn how signal disruptions occur and their technical causes.', 'Hybrid navigation systems, AI monitoring, and fail-safe protocols.', 'Conferences, workshops, and live tech demonstrations.']}
            linktextArr={['View real-time case studies →', 'Explore signal dynamics →', 'Discover adaptive tools →', 'Join Global Navigation Forum →']}
            titleArr={['Understanding Signal Interference', 'Technology Behind Interference', 'Effective Solutions for Reliability', 'Industry Events & Collaboration']}
            linkdestArr={['https://vmb.codes', 'https://vmb.codes', 'https://vmb.codes','https://vmb.codes']}
          ></VerticalListLink>
        </div>
        <div className='other-title-holder-right'><div className='other-title-right'>Drone Technology: Innovation for Safety and Efficiency</div></div>
        <div className='other-title-holder-right'><div className='secondary-title other-title-right'>The Future of Drone Innovation</div></div>
        <div className='other-text-right'>Drones are transforming industries—from emergency response to infrastructure monitoring. But with rapid advancement comes new challenges. Are your systems prepared? We provide insights into drone advancements and safety protocols., Our focus: balancing innovation with security in a fast-evolving technological landscape.</div>
        <div className='other-title-holder-right'><div className='secondary-title other-title-right'>Advanced Applications & Safety</div></div>
        <div className='other-text-right'>
          <ul className='bullet-list flex-list-right'>
            <li><span className='boldList'>Operational Technologies:</span>Autonomous navigation, None-GNSS based navigation and AI-assisted data collection.</li>
            <li><span className='boldList'>Strategic Guidance:</span>Analysis of regulatory trends and operational best practices.</li>
          </ul> 
        </div>
        <div className='other-title-holder-left'>
          <div className='other-title-left'>From Innovation to Responsible Integration</div>
        </div>
        <div className='other-title-holder-left'>
          <VerticalListLink
            textArr={['Infrastructure inspection, disaster relief, and precision delivery.', 'Long-range UAVs, AI navigation, and energy-efficient designs.', 'Signal encryption, geofencing, and real-time monitoring tools.', 'Tech expos, safety summits, and hands-on training sessions.']}
            linktextArr={['See real-world use cases →', 'Explore latest advancements →', 'Enhance operational safety →', 'Attend the Drone Innovation Conference →']}
            titleArr={['Industry Applications', 'Cutting-Edge Drone Tech', 'Airspace Safety Solutions', 'Collaborative Events']}
            linkdestArr={['https://vmb.codes', 'https://vmb.codes', 'https://vmb.codes', 'https://vmb.codes']}
          ></VerticalListLink>
        </div>
        <div className='center-title other-title-holder-right'><div className='other-title-right'>Why Partner With Us?</div></div>
        <div className='other-text-right'>
          <ul className='center-list tick-list flex-list-right'>
            <li><span className='boldList'>Global Experience:</span>Decades in navigation tech and drone innovation.</li>
            <li><span className='boldList'>Trusted Resources:</span>Whitepapers, case studies, and live incident tracking.</li>
            <li><span className='boldList'>Practical Solutions:</span>Scalable strategies tailored to your needs.</li>
            <li><span className='boldList'>Dual Expertise:</span>Navigation reliability and drone technology integration.</li>
            <li><span className='boldList'>End-to-End Support:</span>Risk assessment, system optimization, and training.</li>
            <li><span className='boldList'>Collaborative Network:</span>Partnerships with tech leaders, researchers, and regulators.</li>
          </ul>
        </div>
        <div className='center-title other-title-holder-right'><div className='other-title-right'>Stay Informed, Stay Prepared</div></div>
        <div className='center-title other-title-holder-right'><div className='secondary-title other-title-right'>Resource Hub</div></div>
        <div className='other-text-center'>Access guides, webinars, and tools to navigate technical challenges:</div>
        <div className='other-text-right'>
          <ul className='center-list bullet-list flex-list-right'>
            <li><span className='boldList'>Latest Reports:</span>2024 Signal Reliability Trends | Drone Airspace Management</li>
            <li><span className='boldList'>Articles:</span>GPS Interference in Transport Networks | Drone Tech: 2024 Innovations</li>
            <li><span className='boldList'>Interactive Tools:</span>Signal health diagnostics | Airspace risk assessments</li>
            <li><span className='boldList'>Webinars:</span>Monthly sessions on navigation security and drone safety</li>
          </ul>
        </div>
        <div className='center-title other-title-holder-right'><div className='secondary-title other-title-right'>Connect With Experts</div></div>
        <div className='other-text-center'>Optimize your systems with tailored consultations, audits, and training programs.</div>
        <div className='center-button button-holder'>
          <DroneButton onButtonClick={() => { window.location.href = 'https://google.com' }} text={"Schedule a Consultation"}></DroneButton>
        </div>
      </div>
      <div className='top-btn email-btn'>
        <DroneButton onButtonClick={() => { window.location.href = '#' }} text={'GO TO TOP'}></DroneButton>
      </div>
    </div>
  );
}

export default Landing;
