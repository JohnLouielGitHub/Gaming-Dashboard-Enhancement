function LeagueNews({ data }) {
  return (
    <>
      <div className="d-flex align-items-center">
        <div className="featured__news w-100 border-2 border-sp rounded border my-2 px-3 py-1">
          <h5 className=" bg-main rounded-pill mt-2 px-3 py-2">{data.title}</h5>
          <p className="px-3">{data.description}</p>
          <p className="px-3 text-gray">{data.date}</p>
        </div>
      </div>
    </>
  );
}

export default LeagueNews;
