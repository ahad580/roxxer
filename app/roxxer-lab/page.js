import styles from "./roxxer-lab.module.css";
import ModelViewer from "./ModelViewer";

export const metadata = {
  title: "Roxxer Lab",
  description: "Performance engineering, design experiments, and custom builds at Roxxer.",
};

export default function RoxxerLabPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <p className={styles.kicker}>ROXXER LAB</p>

            <h1 className={styles.h1}>
              Where Performance <br /> Meets Precision.
            </h1>

            <p className={styles.lead}>
              Roxxer Lab is our experimental division for design, testing, and performance upgrades.
              From aero kits to ECU tuning and track-ready builds—every detail is engineered.
            </p>

            <div className={styles.heroCtas}>
              <a className={styles.btnPrimary} href="/technology">
                Explore Parts
              </a>
              <a className={styles.btnGhost} href="/prebooking">
                Book Premium Access
              </a>
            </div>

            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statNum}>120+ projects completed</span>


              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>48h Average Build Time</span>

              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>98% Fitment Accuracy</span>

              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.modelOnly}>
              <ModelViewer />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.hero}>
        <div className={styles.videoWrap}>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="./car-vid.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className={styles.trust}>
        <div className={styles.container}>
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <span className={styles.trustTitle}>Aero & Body</span>
              <span className={styles.trustDesc}>CF splitters, diffusers, widebody fitment</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustTitle}>Performance</span>
              <span className={styles.trustDesc}>Intake, exhaust, ECU calibration, cooling</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustTitle}>Handling</span>
              <span className={styles.trustDesc}>Suspension, alignment, braking systems</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustTitle}>Detailing</span>
              <span className={styles.trustDesc}>Paint correction, ceramic, interior restoration</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Inside The Lab</h2>
            <p className={styles.p}>
              A premium workflow built for obsessive precision—designed for supercars, luxury builds, and performance platforms.
            </p>
          </div>

          <div className={styles.featureGrid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Design & Fitment</h3>
              <p className={styles.cardText}>
                Prototyping, measurement, and fitment checks for every curve and mounting point.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Dyno Validation</h3>
              <p className={styles.cardText}>
                Torque curves, AFR stability, intake temps—tested with repeatable baselines.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Heat & Stress Tests</h3>
              <p className={styles.cardText}>
                Heat-cycle runs and vibration checks for real street and track conditions.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Track Tune Packages</h3>
              <p className={styles.cardText}>
                Suspension + braking + tuning bundles tailored to your driving goals.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Premium Materials</h3>
              <p className={styles.cardText}>
                Carbon fiber, forged alloys, high-grade mounts—chosen for reliability.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Lab Warranty</h3>
              <p className={styles.cardText}>
                Our builds include quality assurance checks and after-install support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Lab FAQ</h2>
            <p className={styles.p}>Quick answers before you book.</p>
          </div>

          <div className={styles.faq}>
            <details className={styles.faqItem}>
              <summary className={styles.faqQ}>Do you work with luxury and supercar platforms?</summary>
              <p className={styles.faqA}>
                Yes. Roxxer Lab is built for premium platforms with precise fitment and finishing standards.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqQ}>Can I choose performance only or visuals only?</summary>
              <p className={styles.faqA}>
                Absolutely. You can build performance-first, aesthetics-first, or a balanced package.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqQ}>What does Premium Area include?</summary>
              <p className={styles.faqA}>
                Priority builds, exclusive parts access, prebooking slots, and dedicated support.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
