
const DataTable = () => {
  return (
    <div className="table-responsive">
        <table className="table table-striped table-sm">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Vendedor</th>
                    <th>Clientes visitados</th>
                    <th>Negócios fechados</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>22/04/2022</td>
                    <td>Lucas Gabriel</td>
                    <td>34</td>
                    <td>25</td>
                    <td>15017.00</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>22/04/2022</td>
                    <td>Maria</td>
                    <td>34</td>
                    <td>25</td>
                    <td>15017.00</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>22/04/2022</td>
                    <td>Daniele</td>
                    <td>34</td>
                    <td>25</td>
                    <td>15017.00</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>22/04/2022</td>
                    <td>Esther</td>
                    <td>34</td>
                    <td>25</td>
                    <td>15017.00</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}

export default DataTable;