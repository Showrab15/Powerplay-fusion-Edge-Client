

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 mt-8">
            <h3 className="text-4xl  uppercase font-bold">{heading}</h3>
            <hr className="border-t-2 mx-auto border-red-500 w-48  my-4" />
            <hr className="border-t-2 mx-auto border-red-500 w-24  my-4" />
        </div>
    );
};

export default SectionTitle;