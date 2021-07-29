import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
	name: "",
	email: "",
	phone: "",
	channel: "",
	address: "",
	comment: ""
};

const phoneRegex = /\+?([\d|\(][\h|\(\d{3}\)|\.|\-|\d]{4,}\d)/;

const validationSchema = Yup.object({
	name: Yup.string().required("Required."),
	email: Yup.string().email("Invalid email format.").required("Required."),
	phone: Yup.string().matches(phoneRegex, "Invalid phone format.").required("Required."),
	channel: Yup.string().required("Required.")
});

const onSubmit = (values, onSubmitProps) => {
	console.log(onSubmitProps);
	console.log("Submited data: ", values);
};

function YoutubeForm() {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			<Form className="form">
				<div className="flex flex-col items-start w-full">
					<label htmlFor="name" className="text-2xl mb-1">Name</label>
					<Field
						type="text"
						id="name"
						name="name"
						placeholder="Your name"
						className="rounded-md p-2 w-full bg-gray-500"
					/>
					<ErrorMessage component="span" name="name" className="text-red-800" />
					<label htmlFor="email" className="text-2xl mt-2 mb-1">Email</label>
					<Field
						type="email"
						id="email"
						name="email"
						placeholder="Your email"
						className="rounded-md p-2 w-full bg-gray-500"
					/>
					<ErrorMessage component="span" name="email" className="text-red-800" />
					<label htmlFor="phone" className="text-2xl mt-2 mb-1">Phone</label>
					<Field
						type="text"
						id="phone"
						name="phone"
						placeholder="Your phone"
						className="rounded-md p-2 w-full bg-gray-500"
					/>
					<ErrorMessage component="span" name="phone" className="text-red-800" />
					<label htmlFor="channel" className="text-2xl mt-2 mb-1">Channel</label>
					<Field
						type="text"
						id="channel"
						name="channel"
						placeholder="Your channel name"
						className="rounded-md p-2 w-full bg-gray-500"
					/>
					<ErrorMessage component="span" name="channel" className="text-red-800" />
					<label htmlFor="address" className="text-2xl mt-2 mb-1">Address</label>
					<Field
						type="text"
						id="address"
						name="address"
						placeholder="Your address"
						className="rounded-md p-2 w-full bg-gray-500"
					/>
					<label htmlFor="comment" className="text-2xl mt-2 mb-1">Comment</label>
					<Field
						as="textarea"
						type="text"
						id="comment"
						name="comment"
						placeholder="Very deep comment"
						className="rounded-md p-2 w-full bg-gray-500"
					/>
				</div>
				<button
					type="submit"
					className="border-2 border-black rounded-md w-20 mt-5"
				>
					Submit
				</button>
			</Form>
		</Formik>
	);
}

export default YoutubeForm;
