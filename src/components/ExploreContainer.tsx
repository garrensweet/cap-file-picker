import './ExploreContainer.css';
import { FilePicker } from '@capawesome/capacitor-file-picker';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const openFilePicker = async () => {

    const result = await FilePicker.pickFiles({
      types: ['application/pdf', 'image/png', 'image/jpeg', 'image/gif', 'image/tiff'],
      multiple: true,
    })

    console.log(result.files);
  }

  return (
    <div className="container">
      
      <p>Start By  <a target="_blank" rel="noopener noreferrer"  onClick={openFilePicker}>Selecting an Image</a></p>
    </div>
  );
};

export default ExploreContainer;
