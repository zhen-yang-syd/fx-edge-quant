import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

const StarWrapper = (Component: any, idName: any) =>
	function HOC(props: any) {
		return (
			<motion.section
				variants={staggerContainer()}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.25 }}
			>
				{idName && <span id={idName}>
				</span>}
				<Component {...props} />
			</motion.section>
		);
	};

export default StarWrapper;