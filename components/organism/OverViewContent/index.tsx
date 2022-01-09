import Category from "./Category";
import TableRow from "./TableRow";

export default function OverViewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <Category
                category="Desktop"
                spend="1.000.000"
                icon="ic-desktop"
              />
              <Category category="Mobile" spend="1.000.000" icon="ic-mobile" />
              <Category category="Category" spend="1.000.000" icon="ic-other" />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  title="Call of Duty:Modern"
                  category="Mobile"
                  item={969}
                  price={100000}
                  status="Success"
                  image="overview-2"
                />

                <TableRow
                  title="Mobile Legend"
                  category="Mobile"
                  item={969}
                  price={100000}
                  status="Success"
                  image="overview-1"
                />

                <TableRow
                  title="Clash of Clans"
                  category="Mobile"
                  item={969}
                  price={100000}
                  status="Pending"
                  image="overview-3"
                />
                <TableRow
                  title="The Royal Game"
                  category="Mobile"
                  item={969}
                  price={100000}
                  status="Failed"
                  image="overview-4"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
