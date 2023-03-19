import {IExpert} from "@/global/interfaces/IExpert";

import SectionHeading from "@/components/Shared/SectionHeading/SectionHeading";
import Expert from "@/components/Experts/Expert/Expert";

import styles from './Experts.module.scss'

interface ExpertsProps {
  experts: IExpert[],
}

const Experts = ({experts}: ExpertsProps) => {
  return (
    <section className={styles.experts}>
      <div className={styles.container}>
        <div className={styles.content}>
          <SectionHeading overhead='Team' title='Our Organic Experts' marginBottom='16px'/>
          <div className={styles.text}>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className={styles.list}>
            {experts.map(expert => (
              <Expert expert={expert} key={expert.id}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experts;