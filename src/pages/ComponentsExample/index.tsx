import ModalNewEntity from '../../components/ModalNewEntity';
import CardsAuditableEntity from '../../components/CardsAuditableEntity';
import CardsCrud from '../../components/CardsCrud';
import CardsDatabase from '../../components/CardsDatabase';
import PropertiesMenu from '../../components/PropertiesMenu';
import CardsRequiredFields from '../../components/CardsRequiredFields';
import MenuGroupPage from '../../components/PropertiesMenu2';

const Index = () => {
  return (
    <>
      <ModalNewEntity />
      <CardsAuditableEntity />
      <CardsCrud />
      <CardsDatabase />
      <PropertiesMenu />
      <CardsRequiredFields />
      <MenuGroupPage />
    </>
  );
};

export default Index;
