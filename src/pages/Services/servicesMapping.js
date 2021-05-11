import Mining from '../../static/images/services/mining.png';
import Construction from '../../static/images/services/construction.png';
import Cattle from '../../static/images/services/cattle.png';
import Environment from '../../static/images/services/environment.png';
import RealState from '../../static/images/services/realstate.png';
import Cartography from '../../static/images/services/cartography.png';

const servicesMapping = [
  {
    text: 'Minas y petroleos',
    image: Mining,
    description: `
            <ul>
                <li>Estudio de suelos Topografía y cartografía </li>
                <li>Revisión de estados de oleoductos</li>
                <li>Modelos 3D del terreno</li>
            </ul>
        `,
  },
  {
    text: 'Construcción e infraestructura',
    image: Construction,
    description: `
            <ul>
                <li>Estudio de suelos.</li>
                <li>Topografía y cartografía</li>
                <li>Revisión de estados de oleoductos</li>
                <li>Modelos 3D del terreno</li>
            </ul>
        `,
  },
  {
    text: 'Estudios ambientales',
    image: Environment,
    description: `
            <ul>
                <li>Detección de zonas con cultivos o árboles</li>
                <li>Modelo 3D del terreno</li>
                <li>Inventario de recursos hídricos</li>
                <li>Modelos de elevación de terreno</li>
            </ul>
        `,
  },
  {
    text: 'Topografía y cartografía',
    image: Cartography,
    description: `
            <ul>
                <li>Mapas de terreno georreferenciados</li>
                <li>Medición real y linderos</li>
            </ul>
        `,
  },
  {
    text: 'Promoción inmobiliaria',
    image: RealState,
    description: `
            <ul>
                <li>Publicidad</li>
                <li>Videos y fotos del terreno</li>
                <li>Medición real y linderos</li>
                <li>Mapas de terreno georreferenciados</li>
            </ul>
        `,
  },
  {
    text: 'Ganadería y agricultura',
    image: Cattle,
    description: `
            <ul>
                <li>Dimensionamiento y estudio de lotes y potreros para rotación de ganado</li>
                <li>Carga máxima del terreno</li>
                <li>Agracultura de precisión</li>
            </ul>
        `,
  },
];

export default servicesMapping;
