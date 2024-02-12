<template>
  <div>
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Open modal for @getbootstrap
    </button>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title modal-font-500" id="exampleModalLabel">
              Where You Wanna Study
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body modal-font-500">
            <form>
              <div class="mb-3">
                <label for="recipient-fullname" class="col-form-label"
                  >FullName</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="recipient-fullname"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="recipient-nationality" class="col-form-label"
                  >Choose Nationality</label
                >
                <select
                  class="form-select"
                  aria-label="select nationality"
                  id="recipient-nationality"
                >
                  <option value="indian" selected>Indian</option>
                  <option value="amarican">American</option>
                  <option value="canadian">Canadian</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="recipient-current-university" class="col-form-label"
                  >University</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="recipient-current-university"
                  required
                />
              </div>
              <div class="mb-3">
                <label> Proficent in English</label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="englishProficiencyYes"
                    required
                  />
                  <label class="form-check-label" for="englishProficiencyYes">
                    Yes
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="englishProficiencyNo"
                  />
                  <label class="form-check-label" for="englishProficiencyNo">
                    No
                  </label>
                </div>
                
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="documentVerification">
                  <label for="documentVerification">Do you have all the required documents</label>
                </div>
              </div>
              <div class="mb-3">
                <label for="recipient-description" class="col-form-label"
                  >Add Description:</label
                >
                <textarea
                  class="form-control"
                  id="recipient-description"
                  required
                ></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn modal-font-500-btn">Send message</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
