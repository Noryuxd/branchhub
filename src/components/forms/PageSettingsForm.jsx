const PageSettingsForm = ({ page }) => {
  return (
    <div className="-m-4">
      <form>
        <div className="bg-gray-300 h-32">
          <div className="radio-togglers">
            <label>
              <input type="radio" name="bgType" value="color" />
              <span className="">Color</span>
            </label>
            <label>
              <input type="radio" name="bgType" value="color" />
              <span>Image</span>
            </label>
          </div>
        </div>
        <div>avatar</div>
      </form>
    </div>
  );
};

export default PageSettingsForm;
