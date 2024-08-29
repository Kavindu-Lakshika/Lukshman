import SideBar from "../components/SideBar";
import Card from "../components/Card";
import Chart from "../components/Chart";
import {
  faBagShopping,
  faUserPlus,
  faChartSimple,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  return (
    <div className="wrapper">
      <SideBar />

      <div className="content-wrapper">
        <div className="row m-4 mb-4">
          <div className="col-12 col-sm-6 col-lg-3 mb-3">
            <Card
              header="15"
              title="Today Orders"
              icon={faBagShopping}
              bgColor="bg-primary"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mb-3" >
            <Card
              header="15"
              title="User Registration"
              icon={faUserPlus}
              bgColor="bg-success"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mb-3" >
            <Card
              header="15"
              title="Total Items"
              icon={faChartSimple}
              bgColor="bg-info"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mb-3">
            <Card
              header="15"
              title="Total Income"
              icon={faClipboard}
              bgColor="bg-dark"
            />
          </div>
        </div>

        {/* Charts Section */}
        <div className="row mt-4">
          <div className="col-12 col-md-6 mb-4">
            <Chart
              uData={[5, 15, 25, 15, 10]}
              xLabels={["Jun", "Jul", "Aug", "Sep", "Oct"]}
              key_str="Total Income"
              chart_color="#353B41"
            />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <Chart
              uData={[5, 10, 3, 15, 30]}
              xLabels={["Jun", "Jul", "Aug", "Sep", "Oct"]}
              key_str="Monthly User Registrations"
              chart_color="#EBAB4F"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
